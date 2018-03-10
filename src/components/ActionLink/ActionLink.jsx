import React from 'react';
import {NavLink} from "react-router-dom";

const FilterLink = ({urlState, children, onSubmitPost}) => (
    <NavLink to={urlState === 'home' ? '' : urlState}
             className="blog-button"
             activeStyle={{
                 textDecoration: "none",
                 color: 'blue',
             }}
             onClick={onSubmitPost}>
        {children}
    </NavLink>
);

export default FilterLink;