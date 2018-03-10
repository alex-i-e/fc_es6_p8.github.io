// @flow
import React from 'react';
import {NavLink} from "react-router-dom";

type Props = {
    urlState: string,
    children?: string,
    onSubmitPost?: (e: SyntheticEvent<HTMLElement>) => void,
};

const FilterLink = (props: Props) => (
    <NavLink to={props.urlState === 'home' ? '' : props.urlState}
             className="blog-button"
             activeStyle={{
                 textDecoration: "none",
                 color: 'blue',
             }}
             onClick={props.onSubmitPost}>
        {props.children}
    </NavLink>
);

export default FilterLink;