import React from 'react';
import styled from 'styled-components';

interface IProps {
    name: string,
    authorID: string
};

interface IState {
};

class AuthorName extends React.Component<IProps, IState> {
    render() {
        const {name, authorID} = this.props;
        return (
            <AuthorNameDiv>
                by
                <a target='_blank' href={`https://www.flickr.com/people/${authorID}/`}>
                    {name}
                </a>
            </AuthorNameDiv>
        );
    }
}

const AuthorNameDiv = styled.div `
  display: flex;
  flex-flow: row wrap;
  
  a {
    display: block;
    margin-left: 5px;
  }
`;

export {AuthorName};
