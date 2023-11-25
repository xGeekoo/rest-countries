import styled from 'styled-components';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { useSearchParams } from 'react-router-dom';

const StyledSearch = styled.div`
  color: var(--input-color);
  position: relative;
  width: 40rem;
  height: 5rem;
  padding-left: 6rem;
  padding-right: 3rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
  background-color: var(--element-color);

  &:focus-within {
    box-shadow: 0 0 0 0.35rem var(--focus-color);
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  color: inherit;
  border: none;
  font-size: 1.4rem;
  background-color: transparent;

  &::placeholder {
    color: inherit;
  }

  &:focus {
    outline: none;
  }
`;

const Label = styled.label`
  display: block;
  position: absolute;
  top: 50%;
  left: 2rem;
  transform: translateY(-50%);
  cursor: pointer;
`;

function Search({ countrySearch, setCountrySearch }) {
  const [, setSearchParams] = useSearchParams();

  function handleChange(e) {
    setSearchParams(searchParams => {
      searchParams.set('page', 1);
      return searchParams;
    });
    setCountrySearch(e.target.value);
  }

  return (
    <StyledSearch>
      <Input
        type="text"
        id="search"
        placeholder="Search for a country..."
        value={countrySearch}
        onChange={handleChange}
      />
      <Label htmlFor="search">
        <FaMagnifyingGlass />
      </Label>
    </StyledSearch>
  );
}

export default Search;
