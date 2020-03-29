import React from 'react';
import {storiesOf} from '@storybook/react';
import {Tag} from './Tag';

storiesOf('Tag', module)
    .add('normal length name',
        () => <Tag name="someTagName"/>
    )
    .add('extra long name',
        () => <Tag name="aawdadawdadadadawdadawdadadadadadadadaddadadadaada"/>
    )
