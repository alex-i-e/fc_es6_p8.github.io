import React, {Component} from 'react';
import BlogSector from "./BlogSector/BlogSector";
import NavigatorSector from "./NavigatorSector/NavigatorSector";

class MainSector extends Component {
    render() {
        return (
            <div className="container main-sector">
                <BlogSector className="test-blog-sector"/>
                <NavigatorSector className="test-navigator-sector"/>
            </div>
        )
    }
}

export default MainSector;