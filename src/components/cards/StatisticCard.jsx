import React from 'react'
import '../travels-section/travels.css'

const StatisticCard = ({count , text , isFeatures, icon, featureTitle, feature}) => {
    return (
        <>
        {!isFeatures ? (
            <div className='mini-card flex flex-col space-y-4 items-center justify-center text-center'>
                <span className='text-3xl font-bold  text-orange-500'>{count}</span>
                <span className='text-gray-500 text-sm'>{text}</span>
            </div>
        ) : (
            <div className='mini-card flex flex-col space-y-3 md:flex-row md:space-x-4'>
                <div className='p-4 bg-pink-500 rounded-2xl w-fit'>{icon}</div>
                <div className='flex flex-col'>
                    <span className='text-2xl font-bold'>{featureTitle}</span>
                    <span className='text-gray-500 text-sm'>{feature}</span>
                </div>
            </div>
        )}    
        </>
    )
}

export default StatisticCard