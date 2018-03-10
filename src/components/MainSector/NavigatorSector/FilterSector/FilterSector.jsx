// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import './FilterSector.css';
import {FILTER_BY_AUTHOR_WAS_CHANGED} from "../../../../constants/actionTypes";

type Props = {
    onChangeFilter: (filterType: string, value: string) => void
}

const mapDispatchToFilterSectorProps = (dispatch) => ({
    onChangeFilter (filterType, value) {
        dispatch({type: FILTER_BY_AUTHOR_WAS_CHANGED, value});
    },
});

class FilterSector extends Component<Props> {
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

    onChangeFilter = (e: SyntheticKeyboardEvent<HTMLButtonElement>) => {
        this.props.onChangeFilter('author', e.currentTarget.value);
    }
}

export default connect(
    null,
    mapDispatchToFilterSectorProps
)(FilterSector);