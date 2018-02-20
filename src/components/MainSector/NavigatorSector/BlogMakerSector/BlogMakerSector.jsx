import React, {Component} from 'react';
import BlogButton from './BlogButton/BlogButton';
import BlogForm from './BlogForm/BlogForm';
import './BlogMakerSector.css';

class BlogMaker extends Component {
    constructor() {
        super();
    }

    render () {

        return (
            <div className="blog-maker-sector">
                <BlogButton/>
                <BlogForm/>
            </div>
        )
    }
}

export default BlogMaker;