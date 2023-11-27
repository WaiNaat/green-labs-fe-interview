import type { StarFragment$key } from './__generated__/StarFragment.graphql';
import type { StarAddMutation } from './__generated__/StarAddMutation.graphql';
import { useFragment, useMutation } from 'react-relay';
import { graphql } from 'relay-runtime';
import { StarRemoveMutation } from './__generated__/StarRemoveMutation.graphql';

const StarFragment = graphql`
  fragment StarFragment on Starrable {
    id
    stargazerCount
    viewerHasStarred
  }
`;

const addStarMutation = graphql`
  mutation StarAddMutation($repoId: ID!) {
    addStar(input: { starrableId: $repoId }) {
      starrable {
        stargazerCount
        viewerHasStarred
      }
    }
  }
`;

const removeStarMutation = graphql`
  mutation StarRemoveMutation($repoId: ID!) {
    removeStar(input: { starrableId: $repoId }) {
      starrable {
        stargazerCount
        viewerHasStarred
      }
    }
  }
`;

type StarProps = {
  starInfo: StarFragment$key;
};

const Star = (props: StarProps) => {
  const { starInfo } = props;

  const { id, stargazerCount, viewerHasStarred } = useFragment(StarFragment, starInfo);
  const [addStar, isAddingStar] = useMutation<StarAddMutation>(addStarMutation);
  const [removeStar, isRemovingStar] = useMutation<StarRemoveMutation>(removeStarMutation);

  const toggleStar = () => {
    if (viewerHasStarred) {
      removeStar({ variables: { repoId: id } });
    } else {
      addStar({ variables: { repoId: id } });
    }
  };

  return (
    <button type="button" disabled={isAddingStar || isRemovingStar} onClick={toggleStar}>
      {viewerHasStarred ? '★' : '☆'} {stargazerCount.toLocaleString()}
    </button>
  );
};

export default Star;
