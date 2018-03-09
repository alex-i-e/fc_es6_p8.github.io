import React, {Component} from 'react';
import BlogSector from "./BlogSector/BlogSector";
import NavigatorSector from "./NavigatorSector/NavigatorSector";

class MainSector extends Component {
    render() {
        return (
            <div className="container main-sector">
                <BlogSector />
                <NavigatorSector onAddNewPost={this.onAddNewPost.bind(this)}/>
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
}

export default MainSector;