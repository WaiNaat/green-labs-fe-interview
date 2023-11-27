import usePagenatedSearch from './hooks/usePagenatedSearch';

type RepoListProps = {
  query: string;
};

const RepoList = (props: RepoListProps) => {
  const { query } = props;

  const {
    result,
    currentPage,
    hasResult,
    hasNextPage,
    hasPreviousPage,
    getNextPage,
    getPreviousPage,
  } = usePagenatedSearch(query);

  return (
    <section>
      {query.length === 0 && <p>검색해 보세요!</p>}
      {query.length > 0 && !hasResult && <p>검색 결과가 없어요ㅠㅠ</p>}
      {result?.map((value) => (
        <div key={`${value?.node?.owner?.login}${value?.node?.name}`}>
          <h3>
            {value?.node?.owner?.login}/{value?.node?.name}
          </h3>
          <p>{value?.node?.description}</p>
          <p>{value?.node?.stargazerCount}</p>
        </div>
      ))}
      {query.length > 0 && hasResult && (
        <>
          <button type="button" onClick={getPreviousPage} disabled={!hasPreviousPage}>
            이전
          </button>
          <p>{currentPage} 페이지</p>
          <button type="button" onClick={getNextPage} disabled={!hasNextPage}>
            다음
          </button>
        </>
      )}
    </section>
  );
};

export default RepoList;
