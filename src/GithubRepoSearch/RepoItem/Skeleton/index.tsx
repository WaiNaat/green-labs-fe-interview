import { Area, Info, Link, RepoDescription, RepoName } from '../RepoItem.style';
import { SkeletonArea } from './Skeleton.style';

const Skeleton = () => {
  return (
    <Area>
      <SkeletonArea $width="7rem" />
      <Link>
        <Info>
          <RepoName>
            <SkeletonArea $width="50%" $height="1.6rem" />
          </RepoName>
          <RepoDescription>
            <SkeletonArea $width="90%" $height="3rem" />
          </RepoDescription>
        </Info>
      </Link>
      <SkeletonArea $width="7rem" />
    </Area>
  );
};

export default Skeleton;
