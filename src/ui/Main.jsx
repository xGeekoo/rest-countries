import { Outlet } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { mediaQueries } from '../styles/mediaQueries';

const StyledMain = styled.main`
  background-color: var(--background-color);
  padding: 0 6rem;
  position: relative;
  flex: 1;

  ${mediaQueries(
    'tablet',
    css`
      padding: 0 1.5rem;
    `
  )}

  ${mediaQueries(
    'mobile-lg',
    css`
      padding: 0 3rem;
    `
  )}
`;

const MainContainer = styled.div`
  margin: 0 auto;
  max-width: 132rem;
`;

function Main() {
  return (
    <StyledMain>
      <MainContainer>
        <Outlet />
      </MainContainer>
    </StyledMain>
  );
}

export default Main;
