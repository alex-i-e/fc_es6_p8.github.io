import React, {Component} from 'react';
import BlogButton from './BlogButton/BlogButton';
import BlogForm from './BlogForm/BlogForm';
import './BlogMakerSector.css';

class BlogMaker extends Component {
    state = {
        isFormOpen: false
    };

    render() {
        const body = this.state.isFormOpen
            ? <BlogForm onAddNewPost={this.props.onAddNewPost}
                        onClickButton={this.onChangeFormState}/>
            : <BlogButton onClickButton={this.onChangeFormState}/>;
        return (
            <div className="blog-maker-sector">
                {body}
            </div>
        )
    }

    onChangeFormState = () => {
        this.setState({
            isFormOpen: !this.state.isFormOpen
        });
    };
}

export default BlogMaker;