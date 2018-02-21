import React, {Component} from 'react';
import './BlogButton.css';

class BlogButton extends Component {

    render() {
        return (
            <button className="blog-button" onClick={this.props.onClickButton}>
                Create new Post
            </button>
        )
    }
}

export default BlogButton;