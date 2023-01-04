import React from 'react';
import Logo from './logo';

export default function Footer() {
    return (
        <div className='flex flex-col space-y-4 bg-[rgb(12,21,36)] px-[60px] pt-48 pb-5 -mt-[180px]'>
            <span className='w-[100px]'>
                <Logo />
            </span>
            <div className="flex space-x-8">
                <div className="flex space-x-1">
                    <span><i class="fa fa-location-dot"></i></span>
                    <small className='text-sm text-start'>Lorem ipsum dolor sit amet, usu at dicam dolore inimicus. Ad voluptua definiebas vim, te vim omnes postulant. Oblique facilisis id qui. Eros latine pertinax no pri, his ei lorem nominati. Malis tractatos mnesarchum cum ut, at cibo sale pro. Qui ex nibh augue vituperata, ut nec fabulas evertitur vituperata.</small>
                </div>
                <div className='flex flex-col space-y-3 w-[20%]'>
                    <div className='flex space-x-3'>
                        <span><i class="fa fa-phone-volume"></i></span>
                        <span>+153-123-456</span>
                    </div>
                    <div className='flex space-x-3'>
                        <span><i class="fa fa-envelope"></i></span>
                        <span>example@fylo.com</span>
                    </div>
                </div>
                <ul className="flex flex-col space-y-3  w-[20%]">
                    <li>About Us</li>
                    <li>Jobs</li>
                    <li>Press</li>
                    <li>Blog</li>
                </ul>
                <ul className="flex flex-col space-y-3  w-[20%]">
                    <li>Contacts Us</li>
                    <li>Term</li>
                    <li>Privacy</li>
                </ul>
                <div className="flex space-x-3  w-[20%]">
                    <span className="border border-slate-300 rounded-full h-6 w-6 cursor-pointer flex justify-center items-center"><i class="fa-brands fa-facebook-f"></i></span>
                    <span className="border border-slate-300 rounded-full h-6 w-6 cursor-pointer flex justify-center items-center"><i class="fa-brands fa-twitter"></i></span>
                    <span className="border border-slate-300 rounded-full h-6 w-6 cursor-pointer flex justify-center items-center"><i class="fa-brands fa-instagram"></i></span>
                </div>
            </div>

        </div>
    );
}
