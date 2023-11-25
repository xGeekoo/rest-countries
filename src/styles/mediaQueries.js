import { css } from 'styled-components';

const devices = new Map([
  ['laptop', '64em'],
  ['tablet', '48em'],
  ['mobile-lg', '26.5625em']
]);

export function mediaQueries(device, style) {
  return css`
    @media screen and (max-width: ${devices.get(device)}) {
      ${style}
    }
  `;
}
