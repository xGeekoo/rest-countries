import { useQuery } from '@tanstack/react-query';
import { getAllCountries } from '../services/apiCountries';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Spinner from '../ui/Spinner';
import styled, { css } from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa6';
import { formatCountryNameURL, formatNumber } from '../utils/helpers';
import ImgSpinner from '../ui/ImgSpinner';
import { useState } from 'react';
import Error from '../ui/Error';
import { mediaQueries } from '../styles/mediaQueries';

const StyledCountry = styled.div`
  padding-top: 6rem;
  padding-bottom: 6rem;

  ${mediaQueries(
    'tablet',
    css`
      padding-left: 3rem;
      padding-right: 3rem;
      padding-top: 4.5rem;
    `
  )}

  ${mediaQueries(
    'mobile-lg',
    css`
      padding-left: 0;
      padding-right: 0;
    `
  )}
`;

const BackBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  color: inherit;
  text-decoration: none;
  padding: 1rem 4rem;
  background-color: var(--element-color);
  margin-bottom: 6rem;
  border: none;
  cursor: pointer;
  transition: box-shadow 0.3s;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.35rem var(--focus-color);
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  gap: 15rem;

  ${mediaQueries(
    'laptop',
    css`
      grid-template-columns: 1fr;
      gap: 5rem;
      justify-items: start;
    `
  )}
`;

const H2 = styled.div`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 2rem;

  ${mediaQueries(
    'tablet',
    css`
      font-size: 2.5rem;
    `
  )}

  ${mediaQueries(
    'mobile-lg',
    css`
      font-size: 2rem;
      margin-bottom: 1.5rem;
    `
  )}
`;

const List = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5rem;

  ${mediaQueries(
    'tablet',
    css`
      flex-direction: column;
      gap: 3rem;
    `
  )}
`;

const Ul = styled.ul`
  list-style: none;
  line-height: 2;
`;

const Strong = styled.strong`
  font-weight: 600;
`;

const BorderContainer = styled.div`
  font-weight: 600;
  margin-top: 5.5rem;
`;

const BorderBtn = styled(Link)`
  display: inline-block;
  margin-bottom: 2rem;
  margin-right: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  color: inherit;
  text-decoration: none;
  padding: 0.5rem 3rem;
  background-color: var(--element-color);
  font-weight: 300;

  transition: box-shadow 0.3s;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.35rem var(--focus-color);
  }

  ${mediaQueries(
    'mobile-lg',
    css`
      margin-bottom: 1rem;
      margin-right: 1rem;
    `
  )}
`;

const ImgContainer = styled.div`
  position: relative;

  ${mediaQueries(
    'laptop',
    css`
      width: 50%;
    `
  )}

  ${mediaQueries(
    'laptop',
    css`
      justify-self: center;
    `
  )}

  ${mediaQueries(
    'mobile-lg',
    css`
      width: auto;
    `
  )}
`;

const Span = styled.span`
  margin-right: 2rem;

  ${mediaQueries(
    'mobile-lg',
    css`
      display: block;
      margin-bottom: 2rem;
    `
  )}
`;

function Country() {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ['countries'],
    queryFn: getAllCountries
  });

  const navigate = useNavigate();

  const [isImgLoading, setIsImgLoading] = useState(false);

  if (isLoading) return <Spinner />;

  if (error) return <Error />;

  const country = data.find(
    country =>
      country.name.common.toLowerCase() ===
      id.replaceAll('-', ' ').replaceAll('_', '-')
  );

  const borders = country.borders?.map(border =>
    data.find(country => border === country.cca3)
  );

  return (
    <StyledCountry>
      <BackBtn onClick={() => navigate(-1)}>
        <FaArrowLeft /> <span>Back</span>
      </BackBtn>
      <Container>
        <ImgContainer>
          <img
            src={`https://flagcdn.com/w1280/${country.cca2.toLowerCase()}.png`}
            alt={country.name.common}
            onLoad={() => setIsImgLoading(false)}
          />
          {isImgLoading && <ImgSpinner />}
        </ImgContainer>
        <div>
          {country.name.common && <H2>{country.name.common}</H2>}
          <List>
            <Ul>
              {country.name.nativeName && (
                <li>
                  <Strong>Native Name:</Strong>{' '}
                  {Array.from(
                    new Set(
                      Object.values(country.name.nativeName).map(
                        nativeName => nativeName.common
                      )
                    )
                  ).join(', ')}
                </li>
              )}
              {country.population && (
                <li>
                  <Strong>Population:</Strong>{' '}
                  {formatNumber(country.population)}
                </li>
              )}
              {country.region && (
                <li>
                  <Strong>Region:</Strong> {country.region}
                </li>
              )}
              {country.subregion && (
                <li>
                  <Strong>Sub Region:</Strong> {country.subregion}
                </li>
              )}
              {country.capital && (
                <li>
                  <Strong>Capital:</Strong> {country.capital.join(', ')}
                </li>
              )}
            </Ul>
            <Ul>
              {country.tld && (
                <li>
                  <Strong>Top Level Domain:</Strong> {country.tld.join(', ')}
                </li>
              )}
              {country.currencies && (
                <li>
                  <Strong>Currencies:</Strong>{' '}
                  {Object.values(country.currencies)
                    .map(currency => currency.name)
                    .join(', ')}
                </li>
              )}
              {country.languages && (
                <li>
                  <Strong>Languages:</Strong>{' '}
                  {Object.values(country.languages).join(', ')}
                </li>
              )}
            </Ul>
          </List>
          {borders && (
            <BorderContainer>
              <div>
                <Span>Border Countries:</Span>
                {borders.map(border => (
                  <BorderBtn
                    to={`../${formatCountryNameURL(border.name.common)}`}
                    key={border.cca2}
                    onClick={() => setIsImgLoading(true)}
                  >
                    {border.name.common}
                  </BorderBtn>
                ))}
              </div>
            </BorderContainer>
          )}
        </div>
      </Container>
    </StyledCountry>
  );
}

export default Country;
