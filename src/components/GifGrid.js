import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);


    return (
        <>
            <h3>{category}</h3>

            {
                loading ? (<p>Cargando...</p>) : (
                    <div className='card-grid'>

                        <ol>
                            {
                                images.map(img => {
                                    return <GifGridItem
                                        key={img.id}
                                        {...img} />
                                })
                            }
                        </ol>
                    </div>
                )
            }

        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
