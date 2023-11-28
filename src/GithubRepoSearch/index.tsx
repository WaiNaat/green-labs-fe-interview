import { Suspense, useState } from 'react';
import RepoList from './RepoList';
import SearchBox from './SearchBox';
import { Main } from './GithubRepoSearch.style';

const GithubRepoSearch = () => {
  const [query, setQuery] = useState('');

  const search = (newQuery: string) => {
    setQuery(newQuery);
  };

  return (
    <Main>
      <SearchBox onSearch={search} />
      <Suspense fallback={<h1>로딩중..</h1>}>
        <RepoList key={query} query={query} />
      </Suspense>
    </Main>
  );
};

export default GithubRepoSearch;
