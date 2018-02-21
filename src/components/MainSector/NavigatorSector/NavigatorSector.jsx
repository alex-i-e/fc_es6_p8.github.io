import React, {Component} from 'react';
import BlogMakerSector from './BlogMakerSector/BlogMakerSector';
import FilterSector from "./FilterSector/FilterSector";
import './NavigatorSector.css';

class NavigatorSector extends Component {
    constructor() {
        super();
    }

    render() {

        return (
            <div className="item-sidebar navigator-sector">
                <BlogMakerSector onAddNewPost={this.props.onAddNewPost}/>
                <FilterSector onChangeFilter={this.props.onChangeFilter}/>
            </div>
        )
    }
}

export default NavigatorSector;