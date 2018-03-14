import React from 'react';
import MainSector from "./MainSector";
import BlogSector from "./BlogSector/BlogSector";
import NavigatorSector from "./NavigatorSector/NavigatorSector";


import {configure, shallow} from 'enzyme';
// setup file
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});


describe('A suite <MainSector/>', () => {

    it('should render without throwing an error', () => {
        expect(shallow(<MainSector/>).contains(
            <div className="container main-sector">
                <BlogSector className="test-blog-sector"/>
                <NavigatorSector className="test-navigator-sector"/>
            </div>
        )).toBe(true);
    });

    it('renders one <BlogSector /> components', () => {
        const wrapper = shallow(<MainSector/>);
        expect(wrapper.find('.test-blog-sector').length).toBe(1);
    });

    it('should be selectable by class ".container.main-sector"', () => {
        const wrapper = shallow(<MainSector/>);
        expect(wrapper.is('.container.main-sector')).toBe(true);
    });

    it('renders one <div> components', () => {
        const wrapper = shallow(<MainSector/>);
        expect(wrapper.find('div').length).toBe(1);
    });

    it('should be selectable by class "foo"', () => {
        expect(shallow(<MainSector/>).is('.foo')).toBe(false);
    });
});