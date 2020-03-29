import React from 'react';

interface IProps {
    desc: string
};

interface IState {
};

class PhotoDescription extends React.Component<IProps, IState> {
    render() {
        const {desc} = this.props;
        return (
            <div>{desc}</div>
        );
    }
}

export {PhotoDescription};
