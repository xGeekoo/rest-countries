import styled from 'styled-components';
import { formatCountryNameURL, formatNumber } from '../../utils/helpers';
import { Link } from 'react-router-dom';

const Main = styled.main`
  padding: 2rem;
  background-color: var(--element-color);
  border-radius: 0 0 0.5rem 0.5rem;
`;

const Img = styled.img`
  width: 100%;
  height: 14.6rem;
  object-fit: cover;
  object-position: center;
  border-radius: 0.5rem 0.5rem 0 0;
`;

const Ul = styled.ul`
  list-style: none;
  font-size: 1.4rem;
`;

const H2 = styled.h2`
  font-weight: 800;
  margin-bottom: 1rem;
  font-size: 1.8rem;
`;

const Strong = styled.strong`
  font-weight: 600;
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  flex: 1;
  color: inherit;
  text-decoration: none;
  display: grid;
  grid-template-rows: auto 1fr;
  transition: box-shadow 0.3s;
  border-radius: 0.5rem;

  box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;

  &:hover,
  &:active {
    transform: translateY(-0.5rem);
    box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.35rem var(--focus-color);
  }
`;

function Country({ country }) {
  return (
    <Article>
      <StyledLink to={formatCountryNameURL(country.name.common)}>
        <header>
          <Img
            src={`https://flagcdn.com/w640/${country.cca2.toLowerCase()}.png`}
            alt={country.name.common}
          />
        </header>
        <Main>
          <H2>{country.name.common}</H2>
          <Ul>
            <li>
              <Strong>Population:</Strong> {formatNumber(country.population)}
            </li>
            {country.region && (
              <li>
                <Strong>Region:</Strong> {country.region}
              </li>
            )}
            {country.capital && (
              <li>
                <Strong>Capital:</Strong> {country.capital.join(', ')}
              </li>
            )}
          </Ul>
        </Main>
      </StyledLink>
    </Article>
  );
}

export default Country;
