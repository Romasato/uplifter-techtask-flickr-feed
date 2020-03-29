import React from 'react';
import styled from 'styled-components';

import {device} from '../styles/styled/device';

import {PhotoTitle} from './PhotoTitle';
import {AuthorName} from './AuthorName';
import {PhotoDescription} from './PhotoDescription';
import {TagsControl} from './TagsControl';
import {PhotoThumb} from './PhotoThumb';

interface IProps {
    title: string,
    link: string,
    thumb: string,
    dateTaken: string,
    description: string,
    publishDate: string,
    author: string,
    authorID: string,
    tags: string
};

interface IState {};

class PhotoWidget extends React.Component<IProps, IState> {
    render() {
        const {
            title,
            link,
            thumb,
            dateTaken,
            description,
            publishDate,
            author,
            authorID,
            tags
        } = this.props;

        return (
            <PhotoWidgetStyled className='photoWidget'>
                <PhotoThumb title={title} url={thumb} />
                <PhotoTitle title={title} link={link} />
                {'by'}
                <AuthorName name={author} />
                {/*<PhotoDescription desc={''} />*/}
                <TagsControl tags={tags.length ? tags.split(' ') : []} />
            </PhotoWidgetStyled>
        );
    }
}

const PhotoWidgetStyled = styled.div`
    padding: 10px;
    width: 100%;
  
    flex: 1 0 auto;
    display: flex;
    flex-flow: column nowrap;
    
    border-radius: 2px;
    background: linear-gradient(to bottom,#f7f7f7,#fffdfd);
`

export {PhotoWidget};
