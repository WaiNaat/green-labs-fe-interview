import { useId, useState } from 'react';

type SearchBoxProps = {
  onSearch: (query: string) => void;
};

const SearchBox = (props: SearchBoxProps) => {
  const { onSearch } = props;

  const [query, setQuery] = useState('');
  const id = useId();

  const validateAndSetQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setQuery(value.slice(0, 100));
  };

  const search = () => onSearch(query.trim());

  const searchIfEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.key === 'Enter') search();
  };

  return (
    <>
      <label htmlFor={id}>레포지토리 검색</label>
      <input
        id={id}
        type="text"
        value={query}
        onChange={validateAndSetQuery}
        onKeyUp={searchIfEnter}
      />
      <button type="button" onClick={search}>
        검색
      </button>
    </>
  );
};

export default SearchBox;
