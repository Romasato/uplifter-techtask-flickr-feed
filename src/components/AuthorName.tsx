import React from 'react';

interface IProps {
    name: string
};

interface IState {
};

class AuthorName extends React.Component<IProps, IState> {
    render() {
        const {name} = this.props;
        return (
            <div>
                <a>
                    {name}
                </a>
            </div>
        );
    }
}

export {AuthorName};
