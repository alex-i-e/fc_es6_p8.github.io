import React, {Component} from 'react';
import BlogSector from "./BlogSector/BlogSector";
import NavigatorSector from "./NavigatorSector/NavigatorSector";

class MainSector extends Component {
    render() {
        return (
            <div className="container main-sector">
                <BlogSector />
                <NavigatorSector />
            </div>
        )
    }
}

export default MainSector;