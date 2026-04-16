import React from 'react';
import footerLogo from '../../assets/logo-xl.png'
import instaIcon from '../../assets/instagram.png'
import fbIcon from '../../assets/facebook.png'
import twitIcon from '../../assets/twitter.png'


const Footer = () => {
    return (
        <div className='w-full bg-[#244D3F]'>
            <div className='w-[80%] m-auto p-20'>
                <div className='w-11/12 m-auto'>
                <div className='text-center space-y-4'>
                    <div className='flex justify-center'>
                        <img src={footerLogo} alt="Footer Logo" />
                    </div>
                    <p className='text-gray-400'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <div>
                        <h2 className='mb-1 text-white text-1xl'>Social Links</h2>
                        <div className='flex justify-center gap-1.5'>
                            <div className='rounded-full p-1'>
                                <img src={instaIcon} alt="Instagram" />
                            </div>
                            <div className='rounded-full p-1.5'>
                                <img src={fbIcon} alt="Facebook" />
                            </div>
                            <div className='rounded-full p-1.5'>
                                <img src={twitIcon} alt="Twitter" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between text-gray-400 border-t border-gray-600 mt-8 pt-2.5'>
                    <div>
                        <p>&copy; 2026 KeenKeeper. All rights reserved.</p>
                    </div>
                    <div className='flex  gap-2.5'>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookies</p>
                    </div>
                </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Footer;