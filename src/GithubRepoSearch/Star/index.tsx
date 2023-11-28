import type { StarFragment$key } from './__generated__/StarFragment.graphql';
import type { StarAddMutation } from './__generated__/StarAddMutation.graphql';
import type { StarRemoveMutation } from './__generated__/StarRemoveMutation.graphql';
import { useFragment, useMutation } from 'react-relay';
import { graphql } from 'relay-runtime';
import { Area, Message, StarIcon, Stargazers } from './Star.style';

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
  data: StarFragment$key;
};

const Star = (props: StarProps) => {
  const { data } = props;

  const { id, stargazerCount, viewerHasStarred } = useFragment(StarFragment, data);
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
    <Area type="button" disabled={isAddingStar || isRemovingStar} onClick={toggleStar}>
      <StarIcon>{viewerHasStarred ? '★' : '☆'}</StarIcon>
      <Stargazers>{stargazerCount.toLocaleString()}</Stargazers>
      <Message>{viewerHasStarred ? 'Unstar' : 'Star'}</Message>
    </Area>
  );
};

export default Star;
