import { Inter } from "next/font/google";
import { SearchNormal1 } from "iconsax-react"

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
  })

const NavBar = () => {
    return (
        <nav className='fixed top-0 left-20 right-0'>
            <div className="border-b border-r-[#EBECF2] px-5 py-[18px] grid grid-cols-3">
                <div className="col-span-2 flex justify-between items-center">
                    <h1 className='text-xl PJS-semibold'>Dashboard</h1> 
                    <div className="h-12 border focus-within:border-2 border-[#DADDDD] rounded-3xl relative flex items-center gap-2 pl-4 w-[350px]">
                        <span className="absolute left-4"><SearchNormal1 color="#78828A" size='18'/></span>
                        <input type="text" id="keyword" name="keyword" placeholder="Search..." className={`mx-7 w-full border-0 outline-none placeholder:text-[#A3A3A3] text-[#A3A3A3]`}/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar