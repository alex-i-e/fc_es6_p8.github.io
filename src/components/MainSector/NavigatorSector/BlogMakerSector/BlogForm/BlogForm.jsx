import React, {Component} from 'react';
import './BlogForm.css';

class BlogForm extends Component {

    state = {
        blog_author: '',
        blog_title: '',
        blog_body: '',
        blog_date: '',
    };

    render() {

        return (
            <div className="blog-form">
                <form onSubmit={this.onSubmitPost.bind(this)}
                      className="blog-form-scope">
                    <label required htmlFor="blog-author">Author:</label>
                    <input onChange={this.onChangeInput.bind(this, 'author')}
                           type="text"
                           id="blog-author"/>

                    <label required htmlFor="blog-title">Title:</label>
                    <input onChange={this.onChangeInput.bind(this, 'title')}
                           type="text"
                           id="blog-title"/>

                    <label htmlFor="blog-body">Body:</label>
                    <input onChange={this.onChangeInput.bind(this, 'body')}
                           type="text"
                           id="blog-body"/>

                    <label htmlFor="blog-date">Date:</label>
                    <input onChange={this.onChangeInput.bind(this, 'date')}
                           type="date"
                           id="blog-date"/>

                    <input type="submit" className="blog-submit" value="Submit POST"/>
                </form>
            </div>
        )
    }

    onChangeInput = (type, event) => {
        this.setState({
            ['blog_' + type]: event.target.value
        });
    };

    onSubmitPost = (e) => {
        if (!this.state.blog_author) {
            alert('Required fields need to fill');
            e.stopPropagation();
            e.preventDefault();
            return;
        }

        this.props.onAddNewPost && this.props.onAddNewPost({
            author: this.state.blog_author,
            title: this.state.blog_title,
            body: this.state.blog_body,
            date: this.state.blog_date,
        });

        this.props.onClickButton && this.props.onClickButton();
    };
}

export default BlogForm;