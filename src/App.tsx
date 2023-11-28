import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { RelayEnvironment } from './RelayEnvironment';
import GithubRepoSearch from './GithubRepoSearch';
import GlobalStyle from './GlobalStyle.style';

function App() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <GlobalStyle />
      <GithubRepoSearch />
    </RelayEnvironmentProvider>
  );
}

export default App;
