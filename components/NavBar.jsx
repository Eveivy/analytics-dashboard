import { Inter } from "next/font/google";
import { SearchNormal1, Calendar, Notification } from "iconsax-react"

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

const NavBar = () => {
    return (
        <nav className='fixed top-0 left-20 right-0'>
            <div className="border-b border-r-[#EBECF2] px-5 py-[18px] grid grid-cols-3 gap-4">
                <div className="col-span-2 flex justify-between items-center">
                    <h1 className='text-xl PJS-semibold'>Dashboard</h1>
                    <div className="h-12 border focus-within:border-2 border-[#DADDDD] rounded-3xl relative flex items-center gap-2 pl-4 w-[350px]">
                        <span className="absolute left-4"><SearchNormal1 color="#78828A" size='18' /></span>
                        <input type="text" id="keyword" name="keyword" placeholder="Search..." className={`${inter.variable} font-sans mx-7 w-full border-0 outline-none placeholder:text-[#A3A3A3] text-[#A3A3A3]`} />
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex h-10 items-center justify-center rounded-[20px] py-3 px-4">
                        <span className="flex items-center"><Calendar size="20" color="#000000" /></span>
                        <span className={`${inter.variable} font-sans leading-[22px] text-sm font-medium ml-1`}>November 15, 2023</span>
                    </div>
                    <div className="flex items-center justify-center border rounded-full w-10 h-10">
                        <Notification size="20" color="#0D062D" variant="Outline" />
                    </div>
                    <div className="rounded-full border border-[#DADDDD] flex items-center justify-center py-[6] px-2 w-28"></div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar