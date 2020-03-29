import React from 'react';
import styled from 'styled-components';

import Popover from 'react-bootstrap/Popover';
import {Tag} from './Tag';

interface IProps {
    tags: string[]
};

class TagsControl extends React.Component<IProps, {}> {
    render() {
        const {tags} = this.props;
        const hasTags = tags.length > 0;

        return (
            <TagsControlStyled>
                {hasTags && (
                    <TagsContainer>
                        {tags.map(tag => <Tag key={tag} name={tag} />)}
                    </TagsContainer>
                )}
                {!hasTags && (
                    <div>No Tags</div>
                )}
            </TagsControlStyled>
        );
    }
}

const TagsControlStyled = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 10px;
`;

const TagsContainer = styled.ul`
  display: flex;
  flex-flow: row wrap;  
  margin: 0;
  padding: 0;
`;

export {TagsControl};
