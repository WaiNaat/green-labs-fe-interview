import { graphql } from 'relay-runtime';
import { RepoListQuery as RepoListQueryType } from './__generated__/RepoListQuery.graphql';
import { useLazyLoadQuery } from 'react-relay';

const RepoListQuery = graphql`
  query RepoListQuery($query: String!, $beforeCursor: String, $afterCursor: String) {
    search(query: $query, type: REPOSITORY, first: 5, after: $afterCursor, before: $beforeCursor) {
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

type RepoListProps = {
  query: string;
};

const RepoList = (props: RepoListProps) => {
  const { query } = props;

  const {
    search: { edges: list },
  } = useLazyLoadQuery<RepoListQueryType>(RepoListQuery, { query });

  return (
    <section>
      {list?.map((value) => (
        <div key={`${value?.node?.owner?.login}${value?.node?.name}`}>
          <h3>
            {value?.node?.owner?.login}/{value?.node?.name}
          </h3>
          <p>{value?.node?.description}</p>
          <p>{value?.node?.stargazerCount}</p>
        </div>
      ))}
    </section>
  );
};

export default RepoList;
