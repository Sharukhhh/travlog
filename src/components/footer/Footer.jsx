import React from 'react'
import { IoLogoFacebook } from "react-icons/io5";
import { FaSquareXTwitter , FaSquareInstagram} from "react-icons/fa6";
import './footer.css';
import FooterList from './FooterList';

const Footer = () => {
    return (
        <>
            <footer className='p-6 text-black mt-24'>
                <div className='container mx-auto flex flex-col md:space-y-6 lg:space-y-0 lg:flex-row lg:justify-between lg:space-x-4'>
                    <FooterList
                        isMain={true}
                        footerTitle={'Travlog'}
                        item1={<IoLogoFacebook className='text-primary' size={22}/>}
                        item2={<FaSquareXTwitter className='text-primary' size={22}/>}
                        item3={<FaSquareInstagram className='text-primary' size={22}/>}
                    />
                    <div className='md:flex md:justify-between md:w-full  lg:flex-row lg:space-x-4'>
                        <FooterList
                            isMain={false}
                            footerTitle={'Company'}
                            item1={'About'}
                            item2={'Careers'}
                            item3={'Mobile'}
                        />
                        <FooterList
                            isMain={false}
                            footerTitle={'Contact'}
                            item1={'Why Travlog?'}
                            item2={'Partner with us'}
                            item3={"FAQ's"}
                            item4={'Blog'}
                        />
                        <FooterList
                            isMain={false}
                            footerTitle={'Meet us'}
                            item1={'+00 92 1234 56789'}
                            item2={'info@travlog.com'}
                            item3={'205. R Street, New York, BD23200'}
                        />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer