import React from 'react'
import { SiTripadvisor , SiAirbnb, SiExpedia} from "react-icons/si";
import { TbBrandBooking } from "react-icons/tb";
import './brands.css';


const Brands = () => {
    return (
        <>
            <section className='brands-section'>
                <div className='brands-grid'>
                    <div className='brand-item'>
                        <SiTripadvisor size={40}/>
                    </div>
                    <div className='brand-item'>
                        <SiExpedia size={40}/>
                    </div>
                    <div className='brand-item'>
                        <TbBrandBooking size={40}/>
                    </div>
                    <div className='brand-item'>
                        <SiAirbnb size={40}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Brands