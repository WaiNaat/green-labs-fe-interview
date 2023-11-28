import { SINGLE_PAGE_ITEM_COUNT } from '..';
import { List } from '../RepoList.style';
import ItemSkeleton from '../../RepoItem/Skeleton';

const Skeleton = () => {
  return (
    <List>
      {Array.from({ length: SINGLE_PAGE_ITEM_COUNT }).map((_, index) => (
        <ul key={index}>
          <ItemSkeleton />
        </ul>
      ))}
    </List>
  );
};

export default Skeleton;
