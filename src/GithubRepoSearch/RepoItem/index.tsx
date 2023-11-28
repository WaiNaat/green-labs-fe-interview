import { useFragment } from 'react-relay';
import type { RepoItemFragment$key } from './__generated__/RepoItemFragment.graphql';
import { graphql } from 'relay-runtime';
import Star from '../Star';

const RepoItemFragment = graphql`
  fragment RepoItemFragment on Repository {
    name
    owner {
      login
    }
    description
    ...StarFragment
  }
`;

type RepoItemProps = {
  data: RepoItemFragment$key;
};

const RepoItem = (props: RepoItemProps) => {
  const { data: dataProp } = props;

  const data = useFragment(RepoItemFragment, dataProp);

  const {
    owner: { login },
    description,
    name,
  } = data;

  return (
    <div>
      <h3>
        {login}/{name}
      </h3>
      <p>{description}</p>
      <Star data={data} />
    </div>
  );
};

export default RepoItem;
