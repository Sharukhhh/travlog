import React from 'react';
import './footer.css';

const FooterList = ({footerTitle , isMain, item1, item2, item3, item4}) => {
    return (
        <>
        <div className='list lg:w-1/4 mb-6 lg:mb-0'>
            <h3 className='footer-list-heading'>{footerTitle}</h3>
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
                    <ul className='text-gray-500 flex flex-col space-y-6'>
                        <li className='ml-3'>{item1}</li>
                        <li>{item2}</li>
                        <li>{item3}</li>
                        {item4 && <li>{item4}</li>}
                    </ul>
                </>
            )}
        </div>
        </>
    )
}

export default FooterList