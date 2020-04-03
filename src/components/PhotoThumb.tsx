import React from 'react';
import styled from 'styled-components';

interface IProps {
    url: string,
    linkUrl: string,
    title?: string
};

class PhotoThumb extends React.Component<IProps, {}> {
    render() {
        const {url, title, linkUrl} = this.props;
        return (
            <PhotoThumbDiv>
                <a target='_blank' href={linkUrl}>
                    <img alt={title || ''} src={url} width='100%'/>
                </a>
            </PhotoThumbDiv>
        );
    }
}

const PhotoThumbDiv = styled.div`
  margin-bottom: 0.5rem; 
  display: flex;
  flex-flow: column nowrap;
  align-content: center;
  
  img {
    border: 1px solid #959595;
    max-width: 100%;
  }  
  
  a {
    text-decoration: none;
  }
`;

export {PhotoThumb};
