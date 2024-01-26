import Link from "next/link"
import Image from "next/image"
import { DocumentDownload } from 'iconsax-react'
import user1 from '@/public/assets/images/person1.png'
import user2 from '@/public/assets/images/person2.png'
import user3 from '@/public/assets/images/person3.png'
import user4 from '@/public/assets/images/person4.png'
import user5 from '@/public/assets/images/person5.png'


const OrdersTable = () => {
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
                            <th className="font-medium w-[330px] text-start pb-5">Name</th>
                            <th className="font-medium text-start pb-5 w-[300px]">Date</th>
                            <th className="font-medium text-start pb-5 w-[200px]">Amount</th>
                            <th className="font-medium text-start pb-5 w-[200px]">Status</th>
                            <th className="font-medium text-start pb-5 w-[200px]">Invoice</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-t border-[#EDF2F6]">
                            <td className="py-4">
                                <div className="flex items-center">
                                    <Image src={user1} alt='user profile' />
                                    <p className="text-base leading-6 font-medium text-[#3A3F51] ml-[10px]">Marcus Bergson</p>
                                </div>
                            </td>
                            <td className="py-4">
                                <span className="text-base leading-6 font-normal text-[#737373]">Nov 15, 2023</span>
                            </td>
                            <td className="py-4">
                                <span className="text-base leading-6 font-medium text-[#0D062D]">$80,000</span>
                            </td>
                            <td className="py-4">
                                <span className="text-base leading-6 font-normal text-[#34CAA5]">Paid</span>
                            </td>
                            <td className="py-4">
                                <Link href='/' className="flex items-center">
                                    <DocumentDownload size="16" color="#0D062D" variant="Outline" />
                                    <p className="text-sm leading-[22px] font-normal text-[#0D062D] ml-1">View</p>
                                </Link>
                            </td>
                        </tr> 
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default OrdersTable