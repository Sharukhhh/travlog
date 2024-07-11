import React from 'react'
import  './travels.css'
import StatisticCard from '../cards/StatisticCard'
import { SlLocationPin } from "react-icons/sl";
import { LuCalendarDays } from "react-icons/lu";
import { RiCouponLine } from "react-icons/ri";


const TravelDetails = ({image, subTitle, title , isFeatures}) => {
    return (
        <>
        <section className={`flex my-4 mx-auto max-w-6xl  ${isFeatures ? 'flex-col-reverse lg:flex-row-reverse': 'flex-col lg:flex-row'}`}>
            <div className='travel-first-half'>
                <img src={image} alt='main' className={`w-full h-full object-cover ${isFeatures && 'md:p-10'}`}/>
            </div>
            <div className='travel-second-half'>
                <h2 className='text-xl font-semibold mb-2 text-pink-500'>{subTitle}</h2>
                <h1 className='text-4xl font-bold'>{title}</h1>
                <p className='description'>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
                </p>
                {!isFeatures ? (
                    <div className='mini-cards-container'>
                        <StatisticCard
                            count={'500+'}
                            text={'Holiday Packages'}
                            isFeatures={isFeatures}
                        />
                        <StatisticCard
                            count={'100'}
                            text={'Luxury Hotels'}
                            isFeatures={isFeatures}
                        />
                        <StatisticCard
                            count={'7'}
                            text={'Premium Airlines'}
                            isFeatures={isFeatures}
                        />
                        <StatisticCard
                            count={'2k+'}
                            text={'Happy Customers'}
                            isFeatures={isFeatures}
                        />
                    </div>
                ) : (
                    <div className='grid grid-cols-1 gap-4'>
                        <StatisticCard
                            isFeatures={isFeatures}
                            icon={<SlLocationPin size={24} color='white'/>}
                            featureTitle={'We offer best services'}
                            feature={'Lorem Ipsum is not simply random text'}
                        />
                        <StatisticCard
                            isFeatures={isFeatures}
                            icon={<LuCalendarDays size={24} color='white'/>}
                            featureTitle={'Schedule your trip'}
                            feature={'It has roots in a piece of classical'}
                        />
                        <StatisticCard
                            isFeatures={isFeatures}
                            icon={<RiCouponLine size={24} color='white'/>}
                            featureTitle={'Get discounted coupons'}
                            feature={'Lorem Ipsum is not simply random text'}
                        />
                    </div>
                )}
            </div>
        </section>
        </>
    )
}

export default TravelDetails