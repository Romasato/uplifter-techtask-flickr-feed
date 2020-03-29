import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import styled, {keyframes} from 'styled-components';

import {device} from '../styles/styled/device';
import {PhotoWidget} from './PhotoWidget';
import {Logo} from './Logo';
import {loadPublicPhotos} from '../stores/actions';

// Redux Store Hookup
const mapStateToProps = (state: any) => {
    return {
        publicPhotos: state.flickr.publicPhotos,
        isLoading: state.flickr.isPublicPhotosLoading
    }
};

const stateConnector = connect(mapStateToProps, {
    loadPublicPhotos
});
type TCProps = ConnectedProps<typeof stateConnector>;

/**
 * Main app component
 */
class App extends React.Component<TCProps, {}> {
    componentDidMount(): void {
        this.props.loadPublicPhotos();
    }

    render() {
        const {publicPhotos, isLoading} = this.props;

        return (
            <AppContainer className='app-container'>
                <Logo />
                {isLoading && (
                    <Loader className='loader'>
                        Photos loading...
                    </Loader>
                )}
                <PhotosList className='photoList'>
                    {publicPhotos?.items?.map((photo: any) => {
                        return (
                            <PhotoWrapper key={photo.link}>
                                <PhotoWidget
                                    title={photo.title}
                                    link={photo.link}
                                    thumb={photo.media.m}
                                    dateTaken={photo.date_taken}
                                    description={photo.description}
                                    publishDate={photo.published}
                                    author={photo.author}
                                    authorID={photo.author_id}
                                    tags={photo.tags}
                                />
                            </PhotoWrapper>
                        )
                    })}
                    {!isLoading && !publicPhotos && (
                        <div>No photos loaded.</div>
                    )}
                </PhotosList>
                <footer>Romas Kriauciukas &copy; 2020</footer>
            </AppContainer>
        );
    }
}

const AppContainer = styled.div`
  display: flex; 
  flex-flow: column nowrap;
  flex: 1 1 auto;
    justify-content: center;
    align-items: center;
`;

const animLoader = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0.2
  }
`;

const Loader = styled.div`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  animation: ${animLoader} 1s linear infinite alternate;
`;

const PhotosList = styled.div`
  display: grid;
  grid-template-columns: 1fr;   
  background: #e6e6e6;
  
  @media screen and ${device.medium} {
    grid-template-columns: 1fr 1fr 1fr;   
  }
  
  @media screen and ${device.large} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;   
  }
`;

const PhotoWrapper = styled.div`
  margin: 10px;
  display: flex;
`;

export default stateConnector(App);
