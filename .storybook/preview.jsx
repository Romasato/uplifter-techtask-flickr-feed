import React from 'react';
import { addDecorator } from '@storybook/react';

import {StoryComponentWrapper} from './StoryComponentWrapper';

addDecorator(storyFn => <StoryComponentWrapper>{storyFn()}</StoryComponentWrapper>);
