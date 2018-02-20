import React, {Component} from 'react';
import './FilterSector.css';

class FilterSector extends Component {
    constructor() {
        super();
    }

    onClickFindButton() {

    }

    render() {

        return (
            <div className="filter-sector">
                <div className="filter-form">
                    <label htmlFor="blog-title">By Title</label>
                    <input type="text" id="blog-title"/>
                    <button className="filter-submit"
                            onClick={this.onClickFindButton}>
                        Find
                    </button>
                </div>
            </div>
        )
    }
}

export default FilterSector;