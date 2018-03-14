import 'jsdom-global/register'; //at the top of file , even  , before importing react
import React from 'react';
// import {shallow} from 'enzyme';
// import renderer from 'react-test-renderer';
import {configure, mount, render} from 'enzyme';
// setup file
import Adapter from 'enzyme-adapter-react-16';
import FilterSector from "./FilterSector";
import {configureStore} from "../../../../configureStore";

configure({adapter: new Adapter()});
let mockedStore = configureStore([])({});


describe('A suite <FilterSector/>', () => {

    it('should mount in a full DOM', () => {
        expect(mount(<FilterSector/>,
            {
                context: {store: mockedStore},
                childContextTypes: {store: PropTypes.object.isRequired}
            })).toBe(true); // .find('.filter-sector')
    });

    it('should mount in a full DOM', () => {
        expect(mount(<FilterSector/>,
            {
                context: {store: mockedStore},
                childContextTypes: {store: PropTypes.object.isRequired}
            }).find(<BlogMakerSector/>).length).toBe(1);
    });

    it('should render to static HTML', () => {
        expect(render(<FilterSector/>,
            {
                context: {store: mockedStore},
                childContextTypes: {store: PropTypes.object.isRequired}
            }).find('#blog-author').text()).toEqual('');
    });

});

