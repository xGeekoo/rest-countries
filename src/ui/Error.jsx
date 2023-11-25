import styled from 'styled-components';

const StyledError = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function Error() {
  return (
    <StyledError>
      Something went wrong while getting countries data
      <br />
      Please try again later
    </StyledError>
  );
}

export default Error;
