import React, {Component} from 'react';
// import './BlogListItem.css';
import {connect} from 'react-redux';

const getVisibleBlogList = (blogList, {type, value}) =>
    blogList.filter(item => item[type].indexOf(value) !== -1);

const mapStateToBlogListItemProps = (state) => ({
    blogList: getVisibleBlogList(
        state.home.blogList,
        {type: 'author', value: state.filters.filterByAuthorValue}
    ),
    filter: state.filters.filterByAuthorValue,
});

class BlogListItem extends Component {
    render() {
        return (
            <div className="blog-list-item">
                {this.props.blogList.map((row, number) =>
                    <div className="blog-list-item__wrapper" key={number.toString()}>
                        <div className="blog-lits-item__title">{row.title}</div>
                        <div className="blog-lits-item__post">{row.body}</div>
                        <div className="blog-lits-item__footer">
                            <div className="blog-lits-item__date">{row.date}</div>
                            <div className="blog-lits-item__author">{row.author}</div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default connect(
    mapStateToBlogListItemProps,
    null
)(BlogListItem);