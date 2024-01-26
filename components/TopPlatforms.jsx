import Link from "next/link"
import Image from "next/image"
import { DocumentDownload } from 'iconsax-react'
import { orders } from "@/lib/data"


const TopPlatforms = () => {
 
    return (
        <div className="flex-shrink-0 border bg-white border-[#EDF2F7] rounded-[14px] p-5 mt-6">
            <div className="flex items-center justify-between mb-5">
                <p className="PJS-semibold text-lg leading-6 font-semibold text-[#26282C]">Top Platform</p>
                <Link href='/' className="transition ease-in-out delay-75 text-lg leading-6 font-medium text-[#34CAA5] hover:text-[#1c9e6c]">See All</Link>
            </div>
            <div className="mt-3"> 
            </div>
        </div>
    ) 
}

export default TopPlatforms;