import React, {Component} from 'react';
import './BlogForm.css';

class BlogForm extends Component {
    constructor() {
        super();
    }

    render() {

        return (
            <div className="blog-form">
                <div className="blog-form-scope">
                    <label htmlFor="blog-author">Author:</label>
                    <input type="text" id="blog-author"/>

                    <label htmlFor="blog-title">Title:</label>
                    <input type="text" id="blog-title"/>

                    <label htmlFor="blog-body">Body:</label>
                    <input type="text" id="blog-body"/>

                    <label htmlFor="blog-date">Date:</label>
                    <input type="date" id="blog-date"/>

                    <button className="blog-submit">
                        Submit POST
                    </button>
                </div>
            </div>
        )
    }
}

export default BlogForm;