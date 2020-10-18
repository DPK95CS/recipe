import React from 'react';
import Photo from './Photo';

const PhotoContainer = props => {
    const displayPhotos = () =>{
            return <Photo url = {props.photos} />;
    };
    return (
    <>
    <section>{displayPhotos()}</section>
    </>
    );
};

export default PhotoContainer;