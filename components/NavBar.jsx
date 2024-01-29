'use client'

import Image from "next/image";
import { Inter } from "next/font/google";
import { SearchNormal1, Calendar, Notification, ArrowDown2 } from "iconsax-react"
import profileImage from '@/public/assets/images/profile-image.png'
import { useTheme } from "next-themes";

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

const NavBar = () => {

    const {theme} = useTheme();
    console.log(theme)

    return (
        <nav className='fixed top-0 left-[77px] right-0 bg-[#FAFAFA] dark:bg-[#0D062D]'>
            <div className="border-b border-b-[#EBECF2] dark:border-b-[#0D062D] px-5 py-[18px] grid grid-cols-3 gap-4">
                <div className="col-span-2 flex justify-between items-center">
                    <h1 className='text-xl PJS-semibold'>Dashboard</h1>
                    <div className="h-12 border focus-within:border-2 border-[#DADDDD] bg-white rounded-3xl relative flex items-center gap-2 pl-4 w-[350px]">
                        <span className="absolute left-4"><SearchNormal1 color="#78828A" size='18' /></span>
                        <input type="text" id="keyword" name="keyword" placeholder="Search..." className={`${inter.variable} font-sans dark:bg-white mx-7 w-full border-0 outline-none placeholder:text-[#A3A3A3] text-[#A3A3A3]`} />
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex h-10 items-center justify-center rounded-[20px] py-3 px-4">
                        <span className="flex items-center"><Calendar size="20" color={theme === 'dark' ? 'white' : '#000000'} /></span>
                        <span className={`${inter.variable} font-sans leading-[22px] text-sm font-medium ml-1`}>November 15, 2023</span>
                    </div>
                    <div className="flex items-center justify-center border dark:border-2 rounded-full w-10 h-10">
                        <Notification size="20" color={theme === 'dark' ? 'white' : '#0D062D'} variant="Outline" />
                    </div>
                    <div className="rounded-full border dark:border-2 border-[#DADDDD] flex items-center justify-center py-[6px] px-2 w-auto cursor-pointer">
                        <div className="h-[38px] w-[38px] flex-shrink-0">
                            <Image src={profileImage} alt="profile image" className="w-full h-full"/> 
                        </div>
                        <div className={`${inter.variable} flex flex-col justify-center items-center mx-1`}>
                            <p className="text-[#26282C] dark:text-white text-right text-base font-normal whitespace-nowrap">Justin Bergson</p>
                            <span className="text-[#787486] text-right text-sm font-normal whitespace-nowrap">Justin@gmail.com</span>
                        </div>
                        <span><ArrowDown2 size="20" color={theme === 'dark' ? 'white' : '#0D062D'}/></span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar