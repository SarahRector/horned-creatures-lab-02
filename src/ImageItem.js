import React from 'react';

export default class ImageItem extends React.Component {
    render() {
        return (
            <>
                <p className="title">{this.props.image.title}</p>
                <img src={this.props.image.url} alt='' />
                <p>{this.props.image.description}</p>
            </>

        )
    }
}