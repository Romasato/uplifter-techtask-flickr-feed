import React from 'react';
import styled from 'styled-components';

interface IProps {
    name: string,
    className?: string
};

interface IState {};


class Tag extends React.Component<IProps, IState> {
    render() {
        const {name, className} = this.props;
        return (
            <TagBubble>
                <a className='tagLink' target='_blank' href={`https://www.flickr.com/photos/tags/${name}`}>{name}</a>
            </TagBubble>
        );
    }
}

const TagBubble = styled.li`
  background: #e4e4e4;
  padding: 4px 5px;
  display: flex;
  border-radius: 3px;
  flex: 0 0 auto;
  align-items: center;
  max-width: 200px;
  word-break: break-all;
  margin: 0 0 3px 3px;
  
  a.tagLink {
    text-decoration: none;
    color: gray;
    font-weight: 400;
    text-transform: lowercase;
  }
`;

export {Tag};
