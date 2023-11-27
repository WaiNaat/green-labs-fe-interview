import { Suspense, useState } from 'react';
import RepoList from './RepoList';
import SearchBox from './SearchBox';

const GithubRepoSearch = () => {
  const [query, setQuery] = useState('');

  const search = (newQuery: string) => {
    setQuery(newQuery);
  };

  return (
    <main>
      <SearchBox onSearch={search} />
      <Suspense fallback={<h1>로딩중..</h1>}>
        <RepoList key={query} query={query} />
      </Suspense>
    </main>
  );
};

export default GithubRepoSearch;
