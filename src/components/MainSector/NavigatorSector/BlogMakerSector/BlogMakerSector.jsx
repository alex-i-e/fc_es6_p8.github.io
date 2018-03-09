import React, {Component} from 'react';
import {connect} from 'react-redux';

import BlogButton from './BlogButton/BlogButton';
import BlogForm from './BlogForm/BlogForm';
import './BlogMakerSector.css';
import {BLOG_CREATOR_TOGGLE} from "../../../../constants/actionTypes";

const mapStateToBlogMakerSectorProps = (state) => ({
    isFormOpen: state.blog.isOpenNewBlogForm,
});

const mapDispatchToBlogMakerSectorProps = (dispatch) => ({
    onChangeFormState: (flag) =>
        dispatch({type: BLOG_CREATOR_TOGGLE, value: flag}),
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

export default connect(mapStateToBlogMakerSectorProps, mapDispatchToBlogMakerSectorProps)(BlogMakerSector);