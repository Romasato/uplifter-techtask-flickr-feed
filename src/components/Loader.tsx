import React from 'react';
import styled, {keyframes} from 'styled-components';

import FlickrBlobs from '../assets/images/flickr-ovals-logo.svg';

const Loader = () => (
    <LoaderDiv className='loader'>
        <LogoImg alt='loader' src={FlickrBlobs} />
        Photos loading...
    </LoaderDiv>
);

const animLoader = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0.2
  }
`;

const LoaderDiv = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

const LogoImg = styled.img`
  animation: ${animLoader} 1s linear infinite alternate;
  max-width: 60px;
  margin-bottom: 0.5em;
`;

export {Loader};
