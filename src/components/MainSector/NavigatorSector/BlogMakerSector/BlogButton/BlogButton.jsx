import React, {Component} from 'react';
import './BlogButton.css';
import {BLOG_CREATOR_TOGGLE} from "../../../../../constants/actionTypes";
import {connect} from 'react-redux';

const mapStateToBlogButtonProps = (state) => ({
    isFormOpen: state.blog.isOpenNewBlogForm,
});

const mapDispatchToBlogButtonProps = (dispatch) => ({
    onChangeFormState(flag) {
        dispatch({type: BLOG_CREATOR_TOGGLE, value: flag});
    },
});

class BlogButton extends Component {
    render() {
        return (
            <button className="blog-button" onClick={this.onChangeFormState}>
                Create new Post
            </button>
        )
    }

    onChangeFormState = () => {
        this.props.onChangeFormState(!this.props.isFormOpen);
    };
}

export default connect(mapStateToBlogButtonProps, mapDispatchToBlogButtonProps)(BlogButton);