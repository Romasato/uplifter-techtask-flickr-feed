import React from 'react';
import {TagsControl} from './TagsControl';

export default {
    title: 'TagsControl',
    component: TagsControl
}

const sampleTags = 'askburkie 2019 2020 2021 2022 2023 2024 2025 2026 2027 2028trending trends themen schlagzeilen germany deutschland politik hashtag tags englishtwittertrends'.split(' ');


export const WithTags = () => <TagsControl tags={sampleTags} />;
export const EmptyTags = () => <TagsControl tags={[]} />;
export const LongTag = () => <TagsControl tags={['loooadaodoaddada_awdadadadad_awdadad']} />;
