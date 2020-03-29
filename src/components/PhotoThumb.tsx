import React from 'react';
import styled from 'styled-components';

const PhotoThumbDiv = styled.div`
  margin-bottom: 0.5rem; 
  display: flex;
  flex-flow: column nowrap;
  align-content: center;
  
  img {
    border: 1px solid #959595;
    max-width: 100%;
  }  
`;

interface IProps {
    url: string,
    title?: string
};

class PhotoThumb extends React.Component<IProps, {}> {
    render() {
        const {url, title} = this.props;
        return (
            <PhotoThumbDiv>
                <img alt={title || ''} src={url} width='100%'/>
            </PhotoThumbDiv>
        );
    }
}

export {PhotoThumb};
