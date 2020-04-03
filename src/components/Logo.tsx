import React from 'react';
import styled from 'styled-components';

import FlickrLogo from '../assets/images/flickr-logo.svg';

interface IProps {

};

interface IState {
};

class Logo extends React.Component<IProps, IState> {
    render() {
        return (
            <LogoDiv className='logo'>
                <LogoImage alt='Logo' src={FlickrLogo} />
            </LogoDiv>
        );
    }
}

const LogoDiv = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  
  padding: 2rem 4rem;
`;

const LogoImage = styled.img`
  max-height: 6rem;
`;

export {Logo};
