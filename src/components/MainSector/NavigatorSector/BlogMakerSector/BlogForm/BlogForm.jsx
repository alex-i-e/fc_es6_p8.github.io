import React, {Component} from 'react';
// import './BlogForm.css';
import {connect} from 'react-redux';
import {ADD_NEW_BLOG, BLOG_CREATOR_TOGGLE} from "../../../../../constants/actionTypes";
import FilterLink from "../../../../ActionLink/ActionLink";

const mapStateToBlogFormProps = (state) => ({
    isFormOpen: state.blog.isOpenNewBlogForm,
});

const mapDispatchToBlogFormProps = (dispatch) => ({
    onBlogSubmit(newBlog) {
        dispatch({type: ADD_NEW_BLOG, value: newBlog});
    },
    onChangeFormState(flag) {
        dispatch({type: BLOG_CREATOR_TOGGLE, value: flag});
    },
});

class BlogForm extends Component {

    constructor() {
        super();
        this.newBlog = {
            author: {value: ''},
            title: {value: ''},
            body: {value: ''},
            date: {value: ''},
        };
    }

    render() {
        return (
            <div className="blog-form">
                <form onSubmit={this.onSubmitPost.bind(this)}
                      className="blog-form-scope">
                    <label required htmlFor="blog-author">Author:</label>
                    <input ref={(node) => {
                        this.newBlog.author = node;
                    }}
                           type="text"
                           id="blog-author"/>

                    <label required htmlFor="blog-title">Title:</label>
                    <input ref={(node) => {
                        this.newBlog.title = node;
                    }}
                           type="text"
                           id="blog-title"/>

                    <label htmlFor="blog-body">Body:</label>
                    <input ref={(node) => {
                        this.newBlog.body = node;
                    }}
                           type="text"
                           id="blog-body"/>

                    <label htmlFor="blog-date">Date:</label>
                    <input ref={(node) => {
                        this.newBlog.date = node;
                    }}
                           type="date"
                           id="blog-date"/>

                    <FilterLink urlState="home"
                                onSubmitPost={this.onSubmitPost.bind(this)}>
                        Submit POST
                    </FilterLink>
                </form>
            </div>
        )
    }

    onSubmitPost(e) {
        if (!this.newBlog.author.value) {
            alert('Required fields need to fill');
            e.preventDefault();
            return;
        }

        this.props.onBlogSubmit({
            author: this.newBlog.author.value,
            title: this.newBlog.title.value,
            body: this.newBlog.body.value,
            date: this.newBlog.date.value,
        });
        this.props.onChangeFormState(!this.props.isFormOpen);
    };
}

export default connect(
    mapStateToBlogFormProps,
    mapDispatchToBlogFormProps
)(BlogForm);