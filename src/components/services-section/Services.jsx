import React from 'react'
import globe from '../../assets/globe.png'
import booking from '../../assets/booking.png';
import weather from '../../assets/weather.png';
import './services.css';
import ServiceCard from '../cards/ServiceCard';

const Services = () => {
    return (
        <>
        <section className='services-section'>
            <div className='first-half'>
                <h2 className='text-xl font-semibold mb-2 text-pink-500'>SERVICES</h2>
                <h1 className='text-4xl font-bold'>Our top value categories for you</h1>
            </div>
            <div className='second-half'>
                <ServiceCard
                    isLast={false}
                    image={globe}
                    title={'Best Tour Guide'}
                    description={'What looked like a small patch of purple grass, above five feet.'}
                />
                <ServiceCard
                    isLast={false}
                    image={booking}
                    title={'Easy Booking'}
                    description={'Square, was moving across the sand in their direction.'}
                />
                <ServiceCard
                    isLast={true}
                    image={weather}
                    title={'Weather Forecast'}
                    description={'What looked like a small patch of purple grass, above five feet.'}
                />
            </div>
        </section>
        </>
    )
}

export default Services