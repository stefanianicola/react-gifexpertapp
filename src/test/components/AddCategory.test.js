import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('pruebas en AddCategory', () => {
    const setCategories = jest.fn();

    let wrapper;

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    it('debe mostrar bien el componente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('debe cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'holis';
        input.simulate('change', { target: { value } })
    });

    it('no debe postear informacion onSubmit', () => {
        wrapper.find('form').simulate('submit', { preventDefault() { } });
        expect(setCategories).not.toHaveBeenCalled();
    });

    it('debe postear informacion onSubmit', () => {
        const input = wrapper.find('input');
        const value = 'holis';
        input.simulate('change', { target: { value } })
        wrapper.find('form').simulate('submit', { preventDefault() { } });

        expect(setCategories).toHaveBeenCalled();
        expect(input.prop('value')).toBe('');
    });
})