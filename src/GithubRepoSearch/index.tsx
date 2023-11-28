import { Suspense, useState } from 'react';
import RepoList from './RepoList';
import SearchBox from './SearchBox';
import { Main, Text, Title } from './GithubRepoSearch.style';
import Skeleton from './RepoList/Skeleton';
import ErrorBoundary from '../ErrorBoundary';
import Error from './RepoList/Error';

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
        <Text>깃허브 저장소를 검색해 보세요!</Text>
      )}
      <ErrorBoundary fallback={<Error />}>
        <Suspense fallback={query.length > 0 && <Skeleton />}>
          <RepoList key={query} query={query} />
        </Suspense>
      </ErrorBoundary>
    </Main>
  );
};

export default GithubRepoSearch;
