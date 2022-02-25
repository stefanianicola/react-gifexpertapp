import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('pruebas en GifExpertApp', () => {

    it('debe mostrar bien el componente', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    it('debe mostrar una lista de categorias', () => {
        const categories = ['Dragol Ball', 'Ricky and Morty']
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length)
    });

})