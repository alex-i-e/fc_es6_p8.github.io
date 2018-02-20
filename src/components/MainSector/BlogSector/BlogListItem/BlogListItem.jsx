import React, {Component} from 'react';
import './BlogListItem.css';

class BlogListItem extends Component {
    constructor() {
        super();
    }

    render() {

        return (
            <div className="blog-list-item">
                <div className="blog-lits-item__title">Title123</div>
                <div className="blog-lits-item__post">Post123</div>
                <div className="blog-lits-item__footer">
                    <div className="blog-lits-item__date">Date123</div>
                    <div className="blog-lits-item__author">Author123</div>
                </div>
            </div>
        )
    }
}

export default BlogListItem;