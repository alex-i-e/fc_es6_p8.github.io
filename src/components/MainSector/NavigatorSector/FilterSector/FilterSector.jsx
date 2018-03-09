import React, {Component} from 'react';
import {connect} from 'react-redux';
import './FilterSector.css';
import {FILTER_BY_AUTHOR_WAS_CHANGED} from "../../../../constants/actionTypes";

const mapDispatchToFilterSectorProps = (dispatch) => ({
    onChangeFilter: (filterType, value) =>
        dispatch({type: FILTER_BY_AUTHOR_WAS_CHANGED, value}),
});

class FilterSector extends Component {
    render() {
        return (
            <div className="filter-sector">
                <div className="filter-form">
                    <label htmlFor="blog-author">Filter By Author</label>
                    <input type="text" id="blog-author" onChange={this.onChangeFilter}/>
                </div>
            </div>
        )
    }

    onChangeFilter = (e) => {
        this.props.onChangeFilter('author', e.target.value);
    }
}

export default connect(null, mapDispatchToFilterSectorProps)(FilterSector);