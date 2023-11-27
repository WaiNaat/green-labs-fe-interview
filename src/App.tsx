import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { RelayEnvironment } from './RelayEnvironment';
import GithubRepoSearch from './GithubRepoSearch';

function App() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <GithubRepoSearch />
    </RelayEnvironmentProvider>
  );
}

export default App;
