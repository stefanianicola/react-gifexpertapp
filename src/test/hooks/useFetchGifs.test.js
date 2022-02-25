import '@testing-library/jest-dom';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('pruebas en useFetchGifs', () => {

    it('debe retornar el estado inicial', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Dragon Ball'));
        const { data, loading } = result.current;
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });


    it('debe retornar un arr de img y loading en false', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Dragon Ball'));
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });

})