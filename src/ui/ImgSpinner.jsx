import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const ImgSinnerContainer = styled.div`
  position: absolute;
  inset: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
`;

const StyledImgSpinner = styled.span`
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: block;
  animation: ${rotation} 1s linear infinite;
`;

function ImgSpinner() {
  return (
    <ImgSinnerContainer>
      <StyledImgSpinner />
    </ImgSinnerContainer>
  );
}

export default ImgSpinner;
