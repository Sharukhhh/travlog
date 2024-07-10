import React from 'react';
import beach from '../../assets/beach.jpg';
import fish from '../../assets/fish.jpg';
import mountains from '../../assets/mountains.jpg';
import { IoIosArrowRoundForward , IoIosArrowRoundBack} from "react-icons/io";
import Card from '../cards/Card';
import './destination.css'

const Destinations = () => {
    return (
        <>
            <section className='destinations-section'>
                <div className='section-title'>
                    <div className='text-content'>
                        <h3 className='text-xl font-semibold mb-2 text-pink-500'>TOP DESTINATION</h3>
                        <h2 className='text-4xl font-bold'>Explore Top Destinations</h2>
                    </div>
                    <div className='arrows'>
                        <IoIosArrowRoundBack className='arrow-icon bg-primary text-white'/>
                        <IoIosArrowRoundForward className='arrow-icon bg-white text-black'/>
                    </div>
                </div>
                <div className='cards-section'>
                    <Card
                        image={beach}
                        cardTitle={'Paradise Beach, Bantayan Island'}
                        location={'Rome, Italy'}
                        price={'$550.16'}
                    />
                    <Card
                        image={fish}
                        cardTitle={'Ocean with full of Colors'}
                        location={'Maldives'}
                        price={'$20.99'}
                    />
                    <Card
                        image={mountains}
                        cardTitle={'Mountain View, Above the cloud'}
                        location={'United Arab Emeries '}
                        price={'$150.99'}
                    />
                </div>
            </section>
        </>
    )
}

export default Destinations