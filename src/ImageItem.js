import React from 'react';

export default class ImageItem extends React.Component {
    render() {
        return (
            <div>
                <p className="title">{this.props.image.title}</p>
                <img src={this.props.image.url.includes('modernfarmer') ? 'http://www.placekitten.com/200/200' : this.props.image.url} alt={this.props.image.title}/>
                <p>{this.props.image.description}</p>
            </div>

        )
    }
}



