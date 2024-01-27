import Link from "next/link"
import Image from "next/image"
import { DocumentDownload } from 'iconsax-react'
import ProgressBar from "./ui_elements/ProgressBar"
import { topPlatformData } from "@/lib/data"


const TopPlatforms = () => {

    return (
        <div className="flex-shrink-0 border bg-white border-[#EDF2F7] rounded-[14px] p-5 my-6 h-fit">
            <div className="flex items-center justify-between mb-5">
                <p className="PJS-semibold text-lg leading-6 font-semibold text-[#26282C]">Top Platform</p>
                <Link href='/' className="transition ease-in-out delay-75 text-lg leading-6 font-medium text-[#34CAA5] hover:text-[#1c9e6c]">See All</Link>
            </div>
            <div className="py-3 flex flex-col gap-5">
                {
                    topPlatformData.map(el => <div key={el.id} className="">
                        <p className="PJS-semibold text-lg font-semibold leading-[26px] text-[#22242C] mb-4">{el.name}</p>
                        <ProgressBar percentage={el.percent} bgColor={el.backgroundColor} />
                        <div className="flex items-start justify-between text-[#525252] mt-4">
                            <span className="text-lg leading-[26px] font-normal block">${el.amount.toLocaleString()}</span>
                            <span className="text-lg leading-[26px] font-normal block">+{el.plusPercent}%</span>
                        </div>
                    </div>)
                }

            </div>
        </div>
    )
}

export default TopPlatforms;