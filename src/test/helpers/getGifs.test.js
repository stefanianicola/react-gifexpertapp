import '@testing-library/jest-dom';
import { getGif } from '../../helpers/getGifs';


describe('pruebas en getGif', () => {

    it('debe traer 10 elementos', async () => {
        const gifs = await getGif('Dragol Ball')

        expect(gifs.length).toBe(10)
    });

    it('si no mando una categoria', async () => {
        const gifs = await getGif('')

        expect(gifs.length).toBe(0)
    });


})