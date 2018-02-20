import React, {Component} from 'react';

class FilterSector extends Component {
    constructor() {
        super();
    }

    onClickFindButton () {

    }

    render () {

        return (
            <div className="filter-sector">
                <div className="filter-form">
                    <div>
                        <label htmlFor="blog-title">By Title</label>
                        <input type="text" id="blog-title" />
                    </div>
                    <button onClick={this.onClickFindButton}>
                        Find
                    </button>
                </div>
            </div>
        )
    }
}

export default FilterSector;