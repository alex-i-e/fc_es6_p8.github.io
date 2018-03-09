import React, {Component} from 'react';
import {connect} from 'react-redux';

import BlogButton from './BlogButton/BlogButton';
import BlogForm from './BlogForm/BlogForm';
import './BlogMakerSector.css';

const mapStateToBlogMakerSectorProps = (state) => ({
    isFormOpen: state.blog.isOpenNewBlogForm,
});

class BlogMakerSector extends Component {
    render() {
        const body = this.props.isFormOpen
            ? <BlogForm />
            : <BlogButton />;

        return (
            <div className="blog-maker-sector">
                {body}
            </div>
        )
    }
}

export default connect(mapStateToBlogMakerSectorProps, null)(BlogMakerSector);