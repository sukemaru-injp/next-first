import { css, keyframes } from 'styled-components';

export const hover = (content: string) => {
  const hoverCss = css`
    &:hover {
      ${content}
    }
  `;
  return hoverCss;
};

type Point = 'default' | 'mobile' | 'tabletOnly' | 'spOnly' | 'spSmallOnly';

export const mediaQuery = (point: Point, content: string) => {
  let mediaQueryPoint;
  switch (point) {
    case 'default':
      mediaQueryPoint = 'screen and (max-width: 1024px)';
      break;
    case 'mobile':
      mediaQueryPoint = 'screen and (max-width: 1024px)';
      break;
    case 'tabletOnly':
      mediaQueryPoint = 'screen and (max-width: 1024px) and (min-width:600px)';
      break;
    case 'spOnly':
      mediaQueryPoint = 'screen and (max-width : 599px)';
      break;
    case 'spSmallOnly':
      mediaQueryPoint = 'screen and (max-width : 350px)';
      break;
  }
  const mediaQueryCss = css`
    @media ${mediaQueryPoint} {
      ${content}
    }
  `;
  return mediaQueryCss;
};

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
