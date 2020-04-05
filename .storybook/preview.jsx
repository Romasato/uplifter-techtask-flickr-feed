import React from 'react';
import {addDecorator, addParameters} from '@storybook/react';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';

//import {withInfo} from '@storybook/addon-info';
//addDecorator(withInfo);

import {StoryComponentWrapper} from './StoryComponentWrapper';

addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS
    },
    backgrounds: [
        {name: 'White', value: '#FFFFFF'},
        {name: 'Dark', value: '#000'},
        {name: 'Gray light', value: '#e9e9e9', default: true},
        {name: 'Gray', value: '#464646'},
        {name: 'Blue', value: '#61bfff'},
        {name: 'Green', value: '#3ac14d'},
    ]
});

addDecorator(storyFn => {
    return (
        <StoryComponentWrapper>{storyFn()}</StoryComponentWrapper>
    )
});
