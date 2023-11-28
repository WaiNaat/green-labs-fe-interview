import { Suspense, useState } from 'react';
import RepoList, { SINGLE_PAGE_ITEM_COUNT } from './RepoList';
import SearchBox from './SearchBox';
import { Main, Text, Title } from './GithubRepoSearch.style';
import Skeleton from './RepoItem/Skeleton';
import { List } from './RepoList/RepoList.style';

const GithubRepoSearch = () => {
  const [query, setQuery] = useState('');

  const search = (newQuery: string) => {
    setQuery(newQuery);
  };

  return (
    <Main>
      <SearchBox onSearch={search} />
      {query.length > 0 ? (
        <Title>&quot;{query}&quot; 검색 결과</Title>
      ) : (
        <Text>레포지토리를 검색해 보세요!</Text>
      )}
      <Suspense
        fallback={
          query.length > 0 && (
            <List>
              {Array.from({ length: SINGLE_PAGE_ITEM_COUNT }).map((_, index) => (
                <ul key={index}>
                  <Skeleton />
                </ul>
              ))}
            </List>
          )
        }
      >
        <RepoList key={query} query={query} />
      </Suspense>
    </Main>
  );
};

export default GithubRepoSearch;
