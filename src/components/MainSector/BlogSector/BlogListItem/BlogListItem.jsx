import React, {Component} from 'react';
import './BlogListItem.css';

class BlogListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {blogList, ...props} = this.props;

        return (
            <div className="blog-list-item">
                {blogList.map((row, number) =>
                    <div className="blog-list-item__wrapper" key={number.toString()}>
                        <div className="blog-lits-item__title">{row.title}</div>
                        <div className="blog-lits-item__post">{row.body}</div>
                        <div className="blog-lits-item__footer">
                            <div className="blog-lits-item__date">{row.date}</div>
                            <div className="blog-lits-item__author">{row.author}</div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default BlogListItem;