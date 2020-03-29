import React from 'react';
import {storiesOf} from '@storybook/react';
import {PhotoWidget} from './PhotoWidget';
import styled from 'styled-components';

const exampleProps = {
    "title": "6.jpg",
    "link": "https:\/\/www.flickr.com\/photos\/40129895@N03\/49723514258\/",
    "thumb": "https://live.staticflickr.com/65535/49727601556_4143ff6d0a_m.jpg",
    "dateTaken": "2020-04-01T07:59:03-08:00",
    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/40129895@N03\/\">nhadatvideo<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/40129895@N03\/49723514258\/\" title=\"6.jpg\"><img src=\"https:\/\/live.staticflickr.com\/65535\/49723514258_6c319aa396_m.jpg\" width=\"180\" height=\"240\" alt=\"6.jpg\" \/><\/a><\/p> ",
    "publishDate": "2020-04-01T14:59:03Z",
    "author": "nobody@flickr.com (\"nhadatvideo\")",
    "authorID": "40129895@N03",
    "tags": "botany dictionaries naturalhistory pictorialworks science zoology smithsonianlibraries bhl:page=59203624 dc:identifier=httpsbiodiversitylibraryorgpage59203624"
};

const Wrapper = styled.div`
  width: 250px;
`;

storiesOf('PhotoWidget', module)
    .add('default',
        () => (
            <Wrapper>
                <PhotoWidget {...exampleProps}/>
            </Wrapper>
        )
    )

