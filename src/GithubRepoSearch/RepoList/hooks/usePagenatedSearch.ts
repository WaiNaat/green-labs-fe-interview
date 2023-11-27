import type { usePagenatedSearchQuery as usePagenatedSearchQueryType } from './__generated__/usePagenatedSearchQuery.graphql';
import { useState } from 'react';
import { useLazyLoadQuery } from 'react-relay';
import { graphql } from 'relay-runtime';

const SINGLE_PAGE_ITEM_COUNT = 5;

const usePagenatedSearchQuery = graphql`
  query usePagenatedSearchQuery(
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
            name
            owner {
              login
            }
            description
            stargazerCount
          }
        }
      }
    }
  }
`;

const usePagenatedSearch = (query: string) => {
  const [index, setIndex] = useState(1);
  const [pageEndCursors, setPageEndCursors] = useState<Array<string | null | undefined>>([null]);

  const {
    search: {
      edges,
      pageInfo: { endCursor, hasPreviousPage, hasNextPage },
    },
  } = useLazyLoadQuery<usePagenatedSearchQueryType>(usePagenatedSearchQuery, {
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

  return {
    currentPage: index,
    hasResult: edges && edges.length > 0,
    result: edges,
    hasNextPage,
    hasPreviousPage,
    getPreviousPage,
    getNextPage,
  };
};

export default usePagenatedSearch;
