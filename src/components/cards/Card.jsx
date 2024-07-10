import React from 'react'
import '../destinations-section/destination.css'

const Card = ({image, cardTitle, location, price}) => {
    return (
        <>
            <div className='card'>
                <img src={image} alt='Beach' className='card-image' />
                <div className='card-content'>
                    <div className='flex justify-between'>
                        <h2 className='card-title'>{cardTitle}</h2>
                        <span className='text-pink-500 font-bold text-xl'>{price}</span>
                    </div>
                    <p className='card-subtitle'>{location}</p>
                    <span className='card-number text-orange-500'>4.5</span>
                </div>
            </div>
        </>
    )
}

export default Card