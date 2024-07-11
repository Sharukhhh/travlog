import React from 'react'
import '../services-section/services.css'

const ServiceCard = ({image , title, description, isLast}) => {
    return (
        <>
            <div className={`services-card ${isLast ? 'lg:hidden' : ''}`}>
                <img src={image} alt='Globe' className='service-card-image' />
                <h2 className='service-card-title'>{title}</h2>
                <span className='card-desc'>{description}</span>
            </div>
        </>
    )
}

export default ServiceCard