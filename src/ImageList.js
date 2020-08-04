import React from 'react';
import ImageItem from './ImageItem.js';

export default class ImageList extends React.Component {
    render() {
        return (
            <ul>
                {
                    this.props.images.map((image) => <ImageItem key={image} image={image} />)
                }
            </ul>
        )
    }
}