import React, {Component} from 'react';
import BlogSector from "./BlogSector/BlogSector";
import NavigatorSector from "./NavigatorSector/NavigatorSector";
import BlogListMock from './blogListMock.json';

class MainSector extends Component {
    state = {
        blogList: [],
        blogListByFilter: [],
        authorFilter: ''
    };

    render() {

        return (
            <div className="container main-sector">
                <BlogSector blogList={this.state.blogListByFilter}/>
                <NavigatorSector onAddNewPost={this.onAddNewPost.bind(this)}
                                 onChangeFilter={this.onChangeFilter.bind(this, 'author')}/>
            </div>
        )
    }

    onAddNewPost = post => {
        const list = this.state.blogList.concat(post);
        this.setState({
            blogList: list,
            blogListByFilter: list.filter(item => item['author'].indexOf(this.state.authorFilter) !== -1),
        });
    };

    onChangeFilter = (type, value) => {
        this.setState({
            blogListByFilter: this.state.blogList.filter(item => item[type].indexOf(value) !== -1),
            authorFilter: value,
        });
    };
}

export default MainSector;