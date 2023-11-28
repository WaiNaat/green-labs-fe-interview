import { graphql } from 'relay-runtime';
import RepoItem from '../RepoItem';
import { useLazyLoadQuery } from 'react-relay';
import {
  RepoListQuery$data,
  RepoListQuery as RepoListQueryType,
} from './__generated__/RepoListQuery.graphql';
import { useState } from 'react';
import { List, PageMoveButton, Pagenation, Section, Text } from './RepoList.style';
import useFetchKey from '../../ErrorBoundary/hooks/useFetchKey';

export const SINGLE_PAGE_ITEM_COUNT = 5;

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
  const fetchKey = useFetchKey();

  const {
    search: {
      edges,
      pageInfo: { endCursor, hasPreviousPage, hasNextPage },
    },
  } = useLazyLoadQuery<RepoListQueryType>(
    RepoListQuery,
    {
      query,
      afterCursor: pageEndCursors[index - 1],
      searchCount: SINGLE_PAGE_ITEM_COUNT,
    },
    { fetchKey }
  );

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
    <Section>
      {query.length > 0 && result.length === 0 && <Text>검색 결과가 없어요😥</Text>}
      <List>
        {result.map(
          (value, index) =>
            value.node && (
              <ul key={`${endCursor}${index}`}>
                <RepoItem data={value.node} />
              </ul>
            )
        )}
      </List>
      {query.length > 0 && result.length > 0 && (
        <Pagenation>
          <PageMoveButton type="button" onClick={getPreviousPage} disabled={!hasPreviousPage}>
            ← 이전
          </PageMoveButton>
          <Text>{index} 페이지</Text>
          <PageMoveButton type="button" onClick={getNextPage} disabled={!hasNextPage}>
            다음 →
          </PageMoveButton>
        </Pagenation>
      )}
    </Section>
  );
};

export default RepoList;
