import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getAllCountries } from '../../services/apiCountries';
import Country from './Country';
import Spinner from '../../ui/Spinner';
import styled, { css } from 'styled-components';
import Pagination from '../../ui/Pagination';
import { COUNTRIES_PER_PAGE } from '../../utils/constants';
import Error from '../../ui/Error';
import { mediaQueries } from '../../styles/mediaQueries';

const StyledCountries = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 6.5rem;
  row-gap: 7rem;
  margin-bottom: 9rem;

  ${mediaQueries(
    'laptop',
    css`
      grid-template-columns: repeat(3, 1fr);
      column-gap: 3.25rem;
      row-gap: 3.5rem;
    `
  )}

  ${mediaQueries(
    'tablet',
    css`
      grid-template-columns: repeat(2, 1fr);
      column-gap: 1.625rem;
    `
  )}

${mediaQueries(
    'mobile-lg',
    css`
      grid-template-columns: repeat(1, 1fr);
    `
  )}
`;

function filterByContinent(data, askedContinent) {
  if (askedContinent === 'all') return Array.from(data);

  return data.filter(country =>
    country.continents.some(continent =>
      continent.toLowerCase().includes(askedContinent)
    )
  );
}

function filterByCountry(data, askedCountry) {
  if (!askedCountry) return Array.from(data);

  return data.filter(country =>
    country.name.common.toLowerCase().includes(askedCountry.toLowerCase())
  );
}

function filterByPage(data, currentPage) {
  const startIndex = (currentPage - 1) * COUNTRIES_PER_PAGE;
  return data.slice(startIndex, startIndex + COUNTRIES_PER_PAGE);
}

function Countries({ countrySearch }) {
  const [searchParams] = useSearchParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ['countries'],
    queryFn: getAllCountries
  });

  if (isLoading) return <Spinner />;

  if (error) return <Error />;

  // Get countries by continent
  const countriesContinent = filterByContinent(
    data,
    searchParams.get('continent') || 'all'
  );

  // Get countries by search
  const countriesSearch = filterByCountry(countriesContinent, countrySearch);

  const countriesPage = filterByPage(
    countriesSearch,
    Number(searchParams.get('page')) || 1
  );

  const numOfPages = Math.ceil(countriesSearch.length / COUNTRIES_PER_PAGE);

  return (
    <>
      <StyledCountries>
        {countriesPage.map(country => (
          <Country country={country} key={country.cca2} />
        ))}
      </StyledCountries>
      <Pagination numOfPage={numOfPages} />
    </>
  );
}

export default Countries;
