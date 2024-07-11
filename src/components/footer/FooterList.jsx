import React, { useState } from 'react';
import './footer.css';
import { IoIosArrowDropdown } from "react-icons/io";

const FooterList = ({footerTitle , isMain, item1, item2, item3, item4}) => {

    const [accordionOpen, setAccordionOpen] = useState(false);
    return (
        <>
        <div className='list lg:w-1/4 mb-6 lg:mb-0'>
            {isMain ? (
                <>
                    <h3 className='footer-list-heading'>{footerTitle}</h3>
                </>
            ) : (
                <>
                <div className='flex justify-between'>
                    <h3 className='footer-list-heading'>{footerTitle}</h3>
                    <span className='rounded-full md:hidden'onClick={() => setAccordionOpen(!accordionOpen)} >
                        <IoIosArrowDropdown size={22} />
                    </span>
                </div>
                <hr className=' my-2 md:hidden'/>
                </>
            )}
            {isMain ? (
                <>
                    <ul className=''>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                    </ul>
                    <ul className='flex space-x-6 text-gray-500'>
                        <li>{item1}</li>
                        <li>{item2}</li>
                        <li>{item3}</li>
                    </ul>
                </>
            ) : (
                <>
                {accordionOpen && (
                    <ul className='text-gray-500 flex flex-col space-y-6'>
                        <li className='ml-3'>{item1}</li>
                        <li>{item2}</li>
                        <li>{item3}</li>
                        {item4 && <li>{item4}</li>}
                    </ul>
                )}
                {!accordionOpen && (
                    <ul className='text-gray-500 flex-col space-y-6 hidden md:block'>
                        <li className='ml-3'>{item1}</li>
                        <li>{item2}</li>
                        <li>{item3}</li>
                        {item4 && <li>{item4}</li>}
                    </ul>
                )}
                </>
            )}
        </div>
        </>
    )
}

export default FooterList