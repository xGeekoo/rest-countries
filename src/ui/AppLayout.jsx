import styled from 'styled-components';
import Header from './Header';
import Main from './Main';

const StyledAppLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Main />
    </StyledAppLayout>
  );
}

export default AppLayout;
