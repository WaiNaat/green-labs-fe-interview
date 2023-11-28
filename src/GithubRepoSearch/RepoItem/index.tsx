import { useFragment } from 'react-relay';
import type { RepoItemFragment$key } from './__generated__/RepoItemFragment.graphql';
import { graphql } from 'relay-runtime';
import Star from '../Star';
import { Area, Image, Info, Link, RepoDescription, RepoName } from './RepoItem.style';

const RepoItemFragment = graphql`
  fragment RepoItemFragment on Repository {
    name
    owner {
      login
      avatarUrl
    }
    description
    url
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
    owner: { login, avatarUrl },
    description,
    name,
    url,
  } = data;

  return (
    <Area>
      <Link href={url} target="_blank">
        <Image src={avatarUrl} alt={`${login} 프로필`} />
        <Info>
          <RepoName>
            {login} / {name}
          </RepoName>
          <RepoDescription>{description}</RepoDescription>
        </Info>
      </Link>
      <Star data={data} />
    </Area>
  );
};

export default RepoItem;
