import React, {Component} from 'react';
import BlogMakerSector from './BlogMakerSector/BlogMakerSector';
import FilterSector from "./FilterSector/FilterSector";
import './NavigatorSector.css';

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