import styled from 'styled-components';

export const Area = styled.div`
  display: flex;

  box-sizing: content-box;
  width: 100%;
  height: 7rem;

  border: 1px solid #cdcdcd;
`;

export const Link = styled.a`
  display: flex;

  box-sizing: content-box;
  width: 100%;
  height: 7rem;

  transition: all 0.2s;

  &:hover {
    color: white;
    background-color: #333333;
  }
`;

export const Image = styled.img`
  width: 7rem;
  height: 7rem;
  object-fit: cover;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  width: calc(100% - 14rem);
  height: 100%;
  padding: 0.7rem;
`;

export const RepoName = styled.h3`
  overflow: hidden;

  width: 100%;
  height: max-content;

  font-size: 1.6rem;
  font-weight: bold;
  line-height: 2rem;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const RepoDescription = styled.p`
  overflow: hidden;
  /* stylelint-disable-next-line value-no-vendor-prefix */
  display: -webkit-box;

  width: 100%;
  height: max-content;
  max-height: 2.5rem;
  margin-top: 0.7rem;

  font-size: 1.1rem;
  line-height: 1.5em;
  line-height: 1.25rem;
  text-overflow: ellipsis;

  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;
