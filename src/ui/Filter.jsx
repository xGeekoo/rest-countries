import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const StyledFilter = styled.select`
  height: 5rem;
  width: 20rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--text-color);
  background-color: var(--element-color);
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  padding-left: 2rem;
  transition: box-shadow 0.3s;
  cursor: pointer;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.35rem var(--focus-color);
  }
`;

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleChange(e) {
    setSearchParams(searchParams => {
      searchParams.set('continent', e.target.value);
      searchParams.set('page', 1);
      return searchParams;
    });
  }

  return (
    <StyledFilter
      value={searchParams.get('continent') || ''}
      onChange={handleChange}
    >
      <option style={{ display: 'none' }} value="">
        Filter by Continent
      </option>
      <option value="all">All Region</option>
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
      <option value="antarctica">Antarctica</option>
    </StyledFilter>
  );
}

export default Filter;
