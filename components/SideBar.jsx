import Link from "next/link"
import Image from "next/image"
import logo from '@/public/assets/images/logo.png'
import brightnessIcon from '@/public/assets/icons/brightness.svg'
import moon from '@/public/assets/icons/moon.svg'
import { Category, TrendUp, Profile2User, Box, DiscountShape, InfoCircle, ArrowCircleRight2, Setting2, Logout } from "iconsax-react"


const SideBar = () => {
  return (
    <section className="w-[80px] h-screen border-r border-r-[#EBECF2]">
      <div className="bg-[#F7F8FA] h-full w-full flex items-center justify-between flex-col py-5">
        <div className="flex items-center flex-col justify-center gap-7">
          <Link href='/' className="w-10 h-10">
            <Image src={logo} alt="site logo" className="w-full h-full" />
          </Link>
          <div className="flex gap-8 flex-col items-center">
            <Link href='/'>
              <Category
                color="#0D062D"
                variant="Bulk"
              />
            </Link>
            <Link href='/'>
              <TrendUp color="#B2ABAB" variant="Broken" />
            </Link>
            <Link href='/'>
              <Profile2User color="#B2ABAB" variant="Broken" />
            </Link>
            <Link href='/'>
              <Box color="#B2ABAB" variant="Broken" />
            </Link>
            <Link href='/'>
              <DiscountShape color="#B2ABAB" variant="Broken" />
            </Link>
            <Link href='/'>
              <InfoCircle color="#B2ABAB" variant="Broken" />
            </Link>

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