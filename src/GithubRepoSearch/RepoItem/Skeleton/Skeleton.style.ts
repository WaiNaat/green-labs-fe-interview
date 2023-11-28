import styled, { keyframes } from 'styled-components';

type SkeletonAreaProps = {
  $width: React.CSSProperties['width'];
  $height?: React.CSSProperties['height'];
};

const moveBackdrop = keyframes`
  from {
    background-position: -1000px 0;
  }
  to {
    background-position: 0 0;
  }
`;

export const SkeletonArea = styled.div<SkeletonAreaProps>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height ?? '100%'};
  background-image: linear-gradient(90deg, #cdcdcd, #eeeeee, #cdcdcd);
  animation: ${moveBackdrop} 20s linear infinite;
`;
