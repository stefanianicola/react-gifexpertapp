import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('pruebas en GifGrid', () => {
    const category = 'Dragon Ball';

    it('que se cree correctamente el componente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('debe mostrar items cuando se cargan img', () => {

        const imgs = [{
            id: 'aaa',
            url: 'https://hhh',
            title: 'algo'
        }];

        useFetchGifs.mockReturnValue({
            data: imgs,
            loading: false
        });
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(imgs.length);

    });


})