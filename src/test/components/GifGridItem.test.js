import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('pruebas en GifExpertApp', () => {
    const title = 'Titulo';
    const url = 'https://algo'

    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    it('debe mostrar bien el componente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('debe tener un p con su title', () => {

        const p = wrapper.find('p')

        expect(p.text().trim()).toBe(title)

    });

    it('debe tener una img con su url y su title iguales a los props', () => {

        const img = wrapper.find('img')

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);

    });

})