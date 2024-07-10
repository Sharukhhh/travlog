import React from 'react'
import './hero.css';
import hero1 from '../../assets/hero1.jpg';
import hero2 from '../../assets/hero2.jpg';
import hero3 from '../../assets/hero3.jpg';

const Hero = () => {
    return (
        <>
        <section className='hero-section flex flex-col-reverse lg:flex-row'>
            <div className='first-half flex flex-col justify-center items-center p-6 lg:w-1/2'>
                <h1 className='title'>
                    Travel <span className='text-pink-500' >top destinations</span> of the world
                </h1>
                <p className='subtitle'>We always make our customer happy by providing
                as many choices as possible </p>
                <div className='buttons flex flex-col space-y-2 md:flex-row md:space-x-4'>
                    <button className='btn-primary'>Get Started </button>
                    <button className='btn-secondary'>Watch Demo</button>
                </div>
            </div>
            <div className='second-half flex flex-col items-center p-6 lg:w-1/2'>
                <img src={hero1} alt='Hero 1' className='zigzag-image' />
                <img src={hero2} alt='Hero 2' className='zigzag-image' />
                <img src={hero3} alt='Hero 3' className='zigzag-image' />
            </div>
        </section>
        </>
    )
}

export default Hero