import React, {Component} from 'react';
import BlogListItem from './BlogListItem/BlogListItem';

class BlogSector extends Component {
    constructor() {
        super();
    }

    render () {

        return (
            <div className="item-main blog-sector">
                <BlogListItem/>
            </div>
        )
    }
}

export default BlogSector;