'use client'
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import logo from '@/public/assets/images/logo.png'
import brightnessIcon from '@/public/assets/icons/brightness.svg'
import moon from '@/public/assets/icons/moon.svg'
import activeIndicator from '@/public/assets/icons/active-indicator.svg'
import { ArrowCircleRight2, Setting2, Logout } from 'iconsax-react'
import { barTabs } from "@/lib/data"


const SideBar = () => {
  const path = usePathname();
 
  const tabs = barTabs.map((el) => {
    const iconColor = path === el.path ? '#0D062D' : '#B2ABAB';
    
    return (
      <Link href={el.path} key={el.id} className="relative flex items-center justify-center w-full"> 
        <div className="flex justify-center items-center">
        {React.cloneElement(el.icon, { color: iconColor })} 
        </div>
        {
          path === el.path && 
          <div className="absolute right-0">
            <Image src={activeIndicator} alt=""/>
          </div>

        }
      </Link>
    )

  })

  return (
    <section className="w-[80px] h-screen border-r border-r-[#EBECF2] fixed">
      <div className="bg-[#F7F8FA] h-full w-full flex items-center justify-between flex-col py-5">
        <div className="flex items-center flex-col justify-center gap-7 w-full">
          <Link href='/' className="w-10 h-10">
            <Image src={logo} alt="site logo" className="w-full h-full" />
          </Link>
          <div className="flex gap-8 flex-col items-center w-full">
             {tabs}
          </div>

          <div className="bg-white flex flex-col items-center p-2 rounded-[100px]">
            <span className="bg-[#34CAA5] flex items-center justify-center w-[30px] p-[7px] rounded-full mb-4 cursor-pointer">
              <Image src={brightnessIcon} alt="brightness icon" className="w-full h-full" />
            </span>
            <span className="flex items-center justify-center w-[30px] p-[7px] rounded-full cursor-pointer">
              <Image src={moon} alt="moon icon" className="w-full h-full" />
            </span>
          </div>
        </div>
        <div className="flex items-center flex-col justify-center gap-7 pb-4">
          <Link href='/'>
            <ArrowCircleRight2 color="#B2ABAB" variant="Broken" />
          </Link>
          <Link href='/'>
            <Setting2 color="#B2ABAB" variant="Broken" />
          </Link>
          <Link href='/'>
            <Logout color="#B2ABAB" variant="Broken" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SideBar