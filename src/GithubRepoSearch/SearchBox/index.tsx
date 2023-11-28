import { useId, useState } from 'react';
import { Area, Button, HiddenLabel, Input } from './SearchBox.style';
import SearchIcon from './assets/SearchIcon';
import GithubIcon from './assets/GithubIcon';

type SearchBoxProps = {
  /** 사용자가 검색 버튼 또는 엔터를 입력했을 때 호출됩니다. */
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
    <Area>
      <HiddenLabel htmlFor={id}>레포지토리 검색</HiddenLabel>
      <GithubIcon />
      <Input
        id={id}
        type="search"
        value={query}
        onChange={validateAndSetQuery}
        onKeyUp={searchIfEnter}
        placeholder="레포지토리 검색"
      />
      <Button type="button" onClick={search} aria-label="검색">
        <SearchIcon aria-hidden />
      </Button>
    </Area>
  );
};

export default SearchBox;
