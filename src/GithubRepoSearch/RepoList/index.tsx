import { graphql } from 'relay-runtime';
import RepoItem from '../RepoItem';
import { useLazyLoadQuery } from 'react-relay';
import {
  RepoListQuery$data,
  RepoListQuery as RepoListQueryType,
} from './__generated__/RepoListQuery.graphql';
import { useState } from 'react';

const SINGLE_PAGE_ITEM_COUNT = 5;

const RepoListQuery = graphql`
  query RepoListQuery(
    $query: String!
    $searchCount: Int!
    $beforeCursor: String
    $afterCursor: String
  ) {
    search(
      query: $query
      type: REPOSITORY
      first: $searchCount
      after: $afterCursor
      before: $beforeCursor
    ) {
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }

      edges {
        node {
          ... on Repository {
            ...RepoItemFragment
          }
        }
      }
    }
  }
`;

type RepoListProps = {
  query: string;
};

const isDefined = <T,>(value: T | null | undefined): value is Exclude<T, null | undefined> =>
  value !== null && value !== undefined;

const RepoList = (props: RepoListProps) => {
  const { query } = props;

  const [index, setIndex] = useState(1);
  const [pageEndCursors, setPageEndCursors] = useState<Array<string | null | undefined>>([null]);

  const {
    search: {
      edges,
      pageInfo: { endCursor, hasPreviousPage, hasNextPage },
    },
  } = useLazyLoadQuery<RepoListQueryType>(RepoListQuery, {
    query,
    afterCursor: pageEndCursors[index - 1],
    searchCount: SINGLE_PAGE_ITEM_COUNT,
  });

  const getPreviousPage = () => {
    if (hasPreviousPage) {
      setIndex(index - 1);
    }
  };

  const getNextPage = () => {
    if (hasNextPage) {
      setIndex(index + 1);
      if (index === pageEndCursors.length) setPageEndCursors([...pageEndCursors, endCursor]);
    }
  };

  const result = edges
    ? edges.filter(
        isDefined<Exclude<RepoListQuery$data['search']['edges'], null | undefined>[number]>
      )
    : [];

  return (
    <section>
      {query.length === 0 && <p>검색해 보세요!</p>}
      {query.length > 0 && result.length === 0 && <p>검색 결과가 없어요ㅠㅠ</p>}
      {result.map((value) => value.node && <RepoItem data={value.node} />)}
      {query.length > 0 && result.length > 0 && (
        <>
          <button type="button" onClick={getPreviousPage} disabled={!hasPreviousPage}>
            이전
          </button>
          <p>{index} 페이지</p>
          <button type="button" onClick={getNextPage} disabled={!hasNextPage}>
            다음
          </button>
        </>
      )}
    </section>
  );
};

export default RepoList;
