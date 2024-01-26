import Link from "next/link"
import Image from "next/image"
import { DocumentDownload } from 'iconsax-react'
import { orders } from "@/lib/data"


const OrdersTable = () => { 
    const allOrder = orders.map(el => {
        return (
            <tr key={el.id} className="border-t border-[#EDF2F6]">
                <td className="py-4">
                    <div className="flex items-center">
                        <Image src={el.userImage} alt='user profile' />
                        <p className="text-base leading-6 font-medium text-[#3A3F51] ml-[10px]">{el.username}</p>
                    </div>
                </td>
                <td className="py-4">
                    <span className="text-base leading-6 font-normal text-[#737373]">{el.date}</span>
                </td>
                <td className="py-4">
                    <span className="text-base leading-6 font-medium text-[#0D062D]">${el.amount}</span>
                </td>
                <td className="py-4">
                    {
                        el.status === 1 ? 
                        <span className="text-base leading-6 font-normal text-[#34CAA5]">Paid</span>
                        :  <span className="text-base leading-6 font-normal text-[#ED544E]">Refund</span>
                    }
                </td>
                <td className="py-4">
                    <Link href='/' className="flex items-center">
                        <DocumentDownload size="16" color="#0D062D" variant="Outline" />
                        <p className="text-sm leading-[22px] font-normal text-[#0D062D] ml-1">View</p>
                    </Link>
                </td>
            </tr>
        )
    })
    return (
        <div className="flex-shrink-0 border bg-white border-[#EDF2F7] rounded-[14px] p-5">
            <div className="flex items-center justify-between mb-5">
                <p className="PJS-semibold text-lg leading-6 font-semibold text-[#26282C]">Last Orders</p>
                <Link href='/' className="transition ease-in-out delay-75 text-lg leading-6 font-medium text-[#34CAA5] hover:text-[#1c9e6c]">See All</Link>
            </div>
            <div className="mt-3">
                <table className="table-fixed">
                    <thead >
                        <tr className="text-[#9CA4AB]">
                            <th className="font-medium w-[400px] text-start pb-5">Name</th>
                            <th className="font-medium text-start pb-5 w-[300px]">Date</th>
                            <th className="font-medium text-start pb-5 w-[200px]">Amount</th>
                            <th className="font-medium text-start pb-5 w-[200px]">Status</th>
                            <th className="font-medium text-start pb-5 w-[200px]">Invoice</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allOrder}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default OrdersTable