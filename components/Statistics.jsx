import { BoxTick, TrendUp, TrendDown, I3DRotate, ShoppingCart, Coin1 } from "iconsax-react";
import Image from "next/image";
import redChart from '@/public/assets/images/chart_red.png'
import greenChart from '@/public/assets/images/chart_green.png'
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

const Statistics = () => {
    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="flex-shrink-0">
                <div className="border bg-white border-[#EDF2F7] rounded-[14px] p-5 w-[240px]">
                    <div className="flex items-center justify-between mb-2">
                        <div className="border rounded-full flex items-center justify-center flex-shrink-0 w-10 h-10">
                            <BoxTick size="24" color="#34CAA5" variant="Bulk" />
                        </div>
                        <Image alt="chart" src={greenChart} />
                    </div>
                    <h2 className="text-lg font-medium leading-[26px] text-[#898989]">Total Order</h2>
                    <p className="leading-8 font-semibold text-2xl text-[#3A3F51]">350</p>
                    <div className="flex items-start mt-[10px]">
                        <div className="flex items-center justify-center py-1 px-2 rounded-[1000px] bg-[#34CAA51F]">
                            <TrendUp size="12" color="#34CAA5" />
                            <span className="font-medium text-[12px] text-[#34CAA5] ml-1">23,5%</span>
                        </div>
                        <p className={`${inter.variable} font-sans ml-[10px] text-sm text-[#606060]`}>vs. previous month</p>
                    </div>
                </div>
            </div>
            <div className="flex-shrink-0">
                <div className="border bg-white border-[#EDF2F7] rounded-[14px] p-5 w-[240px]">
                    <div className="flex items-center justify-between mb-2">
                        <div className="border rounded-full flex items-center justify-center flex-shrink-0 w-10 h-10">
                            <I3DRotate size="24" color="#34CAA5" variant="Bulk" />
                        </div>
                        <Image alt="chart" src={redChart} />
                    </div>
                    <h2 className="text-lg font-medium leading-[26px] text-[#898989]">Total Refund</h2>
                    <p className="leading-8 font-semibold text-2xl text-[#3A3F51]">270</p>
                    <div className="flex items-start mt-[10px]">
                        <div className="flex items-center justify-center py-1 px-2 rounded-[1000px] bg-[#ED544E1F]">
                            <TrendDown size="12" color="#ED544E" />
                            <span className="font-medium text-[12px] text-[#ED544E] ml-1">23,5%</span>
                        </div>
                        <p className={`${inter.variable} font-sans ml-[10px] text-sm text-[#606060]`}>vs. previous month</p>
                    </div>
                </div>
            </div>
            <div className="flex-shrink-0">
                <div className="border bg-white border-[#EDF2F7] rounded-[14px] p-5 w-[240px]">
                    <div className="flex items-center justify-between mb-2">
                        <div className="border rounded-full flex items-center justify-center flex-shrink-0 w-10 h-10">
                            <ShoppingCart size="24" color="#34CAA5" variant="Bulk" />
                        </div>
                        <Image alt="chart" src={redChart} />
                    </div>
                    <h2 className="text-lg font-medium leading-[26px] text-[#898989]">Average Sales</h2>
                    <p className="leading-8 font-semibold text-2xl text-[#3A3F51]">1567</p>
                    <div className="flex items-start mt-[10px]">
                        <div className="flex items-center justify-center py-1 px-2 rounded-[1000px] bg-[#ED544E1F]">
                            <TrendDown size="12" color="#ED544E" />
                            <span className="font-medium text-[12px] text-[#ED544E] ml-1">23,5%</span>
                        </div>
                        <p className={`${inter.variable} font-sans ml-[10px] text-sm text-[#606060]`}>vs. previous month</p>
                    </div>
                </div>
            </div>
            <div className="flex-shrink-0">
                <div className="border bg-white border-[#EDF2F7] rounded-[14px] p-5 w-[240px]">
                    <div className="flex items-center justify-between mb-2">
                        <div className="border rounded-full flex items-center justify-center flex-shrink-0 w-10 h-10">
                            <Coin1 size="24" color="#34CAA5" variant="Bulk" />
                        </div>
                        <Image alt="chart" src={greenChart} />
                    </div>
                    <h2 className="text-lg font-medium leading-[26px] text-[#898989]">Total Income</h2>
                    <p className="leading-8 font-semibold text-2xl text-[#3A3F51]">$350.000</p>
                    <div className="flex items-start mt-[10px]">
                    <div className="flex items-center justify-center py-1 px-2 rounded-[1000px] bg-[#34CAA51F]">
                            <TrendUp size="12" color="#34CAA5" />
                            <span className="font-medium text-[12px] text-[#34CAA5] ml-1">23,5%</span>
                        </div>
                        <p className={`${inter.variable} font-sans ml-[10px] text-sm text-[#606060]`}>vs. previous month</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistics;