import styled, { keyframes } from 'styled-components';

const animMarker = keyframes`
  0% {
    transform: rotate(45deg) translate(5px, 5px);
  }
  100% {
    transform: rotate(45deg) translate(-5px, -5px);
  }
`;

const animShadow = keyframes`
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
`;

const Spinner = styled.div`
  width: 48px;
  height: 48px;
  margin: auto;
  box-sizing: border-box;
  position: absolute;
  inset: 0;

  &::after {
    content: '';
    box-sizing: border-box;
    width: 48px;
    height: 48px;
    left: 0;
    bottom: 0;
    position: absolute;
    border-radius: 50% 50% 0;
    border: 15px solid var(--focus-color);
    transform: rotate(45deg) translate(0, 0);
    box-sizing: border-box;
    animation: ${animMarker} 0.4s ease-in-out infinite alternate;
  }

  &::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 150%;
    width: 24px;
    height: 4px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.2);
    animation: ${animShadow} 0.4s ease-in-out infinite alternate;
  }
`;

export default Spinner;
