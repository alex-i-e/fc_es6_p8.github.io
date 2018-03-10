import React, {Component} from 'react';
import './BlogButton.css';
import {connect} from 'react-redux';
import FilterLink from "../../../../ActionLink/ActionLink";

class BlogButton extends Component {
    render() {
        return (
            <FilterLink urlState="edit">
                Create new Post
            </FilterLink>
        )
    }
}

export default connect()(BlogButton);