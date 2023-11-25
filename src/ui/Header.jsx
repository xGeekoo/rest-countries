import styled, { css } from 'styled-components';
import ToggleTheme from './ToggleTheme';
import { Link } from 'react-router-dom';
import { mediaQueries } from '../styles/mediaQueries';

const StyledHeader = styled.header`
  background-color: var(--element-color);
  padding: 0 6rem;
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.05);
  z-index: 1;

  ${mediaQueries(
    'tablet',
    css`
      padding: 0 3rem;
    `
  )}

  ${mediaQueries(
    'mobile-lg',
    css`
      padding: 0 1.5rem;
    `
  )}
`;

const HeaderContainer = styled.div`
  padding: 2rem 0;
  margin: 0 auto;
  max-width: 132rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mediaQueries(
    'tablet',
    css`
      padding: 3rem 0;
    `
  )}
`;

const H1 = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;

  ${mediaQueries(
    'tablet',
    css`
      font-size: 1.8rem;
    `
  )}

  ${mediaQueries(
    'mobile-lg',
    css`
      font-size: 1.6rem;
    `
  )}
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

function Header() {
  return (
    <StyledHeader>
      <HeaderContainer>
        <H1>
          <StyledLink to="/countries">Where in the world?</StyledLink>
        </H1>
        <ToggleTheme />
      </HeaderContainer>
    </StyledHeader>
  );
}

export default Header;
