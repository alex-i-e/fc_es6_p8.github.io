import React, {Component} from 'react';

class BlogForm extends Component {
    constructor() {
        super();
    }

    render () {

        return (
            <div className="blog-form">
                <div>
                    <label htmlFor="blog-author">Author</label>
                    <input type="text" id="blog-author" />

                    <label htmlFor="blog-title">Title</label>
                    <input type="text" id="blog-title" />

                    <label htmlFor="blog-body">Body</label>
                    <input type="text" id="blog-body" />

                    <label htmlFor="blog-date">Date</label>
                    <input type="text" id="blog-date" />
                </div>
                <button>
                    Submit POST
                </button>
            </div>
        )
    }
}

export default BlogForm;