import React from 'react';
import styled from 'styled-components';

interface IProps {
    title: string,
    link: string
};

interface IState {
};

class PhotoTitle extends React.Component<IProps, IState> {
    render() {
        const {title, link} = this.props;
        return (
            <PhotoTitleStyle>
                <PhotoLink target='_blank' href={link}>{title}</PhotoLink>
            </PhotoTitleStyle>
        );
    }
}

const PhotoTitleStyle = styled.div`
  font-size: 1rem;
`;

const PhotoLink = styled.a`
  word-break: break-word;
`

export {PhotoTitle};
