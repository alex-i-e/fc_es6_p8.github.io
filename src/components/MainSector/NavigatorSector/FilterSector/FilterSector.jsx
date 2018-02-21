import React, {Component} from 'react';
import './FilterSector.css';

class FilterSector extends Component {

    render() {

        return (
            <div className="filter-sector">
                <div className="filter-form">
                    <label htmlFor="blog-author">Filter By Author</label>
                    <input type="text" id="blog-author" onChange={this.onChangeFilter.bind(this)}/>
                </div>
            </div>
        )
    }

    onChangeFilter = (e) => {
        this.props.onChangeFilter && this.props.onChangeFilter(e.target.value);
    }
}

export default FilterSector;