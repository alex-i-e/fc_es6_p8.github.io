import React, {Component} from 'react';
import BlogMakerSector from './BlogMakerSector/BlogMakerSector';
import FilterSector from "./FilterSector/FilterSector";

class NavigatorSector extends Component {
    render() {
        return (
            <div className="item-sidebar navigator-sector">
                <BlogMakerSector />
                <FilterSector />
            </div>
        )
    }
}

export default NavigatorSector;