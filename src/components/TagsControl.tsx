import React from 'react';
import styled from 'styled-components';

import {OverlayTrigger, Popover, Button} from 'react-bootstrap';
import {Tag} from './Tag';

interface IProps {
    tags: string[]
};

class TagsControl extends React.Component<IProps, {}> {
    render() {
        const {tags} = this.props;
        const hasTags = tags.length > 0;

        return (
            <TagsControlDiv>
                {!hasTags && (
                    <div>No Tags</div>
                )}
                {hasTags && (
                    <OverlayTrigger
                        trigger="click"
                        placement={'bottom'}
                        rootClose
                        overlay={
                            <Popover id={tags.join('')}>
                                <Popover.Title as="h3">{`Tags of the Photo`}</Popover.Title>
                                <Popover.Content>
                                    <TagsContainer>
                                        {tags.map(tag => <Tag key={tag} name={tag} />)}
                                    </TagsContainer>
                                </Popover.Content>
                            </Popover>
                        }
                    >
                        <ButtonTags disabled={!hasTags} variant="secondary">
                            {hasTags ? (
                                <>
                                View tags
                                <ButtonArrow>▽</ButtonArrow>
                                </>
                            ) : 'No tags'}
                        </ButtonTags>
                    </OverlayTrigger>
                )}
            </TagsControlDiv>
        );
    }
}

const ButtonArrow = styled.span`
  opacity: 0.5;
  margin-left: 0.5em;
`;

const TagsControlDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 10px;
  align-self: center;
  margin-bottom: 20px;
`;

const ButtonTags = styled(Button)`
  border: none;
  background: #dddddd;
  color: #848282;
`;

const TagsContainer = styled.ul`
  display: flex;
  flex-flow: row wrap;  
  margin: 0;
  padding: 0;
`;

export {TagsControl};
