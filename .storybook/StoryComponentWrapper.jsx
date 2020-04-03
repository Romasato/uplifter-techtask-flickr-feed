import React from 'react';

// APP styles (custom location depending on app)
import '../src/styles/styles.scss';

// Storybook preview frame styles
import './preview.scss';

class StoryComponentWrapper extends React.Component {
    render() {
        const {children} = this.props;
        return (
            React.Children.only(children)
        );
    }
}

export {StoryComponentWrapper};
