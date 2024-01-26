import { Category, TrendUp, Profile2User, Box, DiscountShape, InfoCircle } from "iconsax-react"
import { usePathname } from "next/navigation"
import user1 from '@/public/assets/images/person1.png'
import user2 from '@/public/assets/images/person2.png'
import user3 from '@/public/assets/images/person3.png'
import user4 from '@/public/assets/images/person4.png'
import user5 from '@/public/assets/images/person5.png'


// const path = usePathname()
// console.log()

const barTabs = [
    {
        id: 1,
        icon: <Category color="#0D062D" variant="Bulk" />,
        path: '/'
    },
    {
        id: 2,
        icon: <TrendUp color="#B2ABAB" variant="Broken" />,
        path: '/trends'
    },
    {
        id: 3,
        icon: <Profile2User color="#B2ABAB" variant="Broken" />,
        path: '/users'
    },
    {
        id: 4,
        icon: <Box color="#B2ABAB" variant="Broken" />,
        path: '/packages'
    },
    {
        id: 5,
        icon: <DiscountShape color="#B2ABAB" variant="Broken" />,
        path: '/offers'
    },
    {
        id: 6,
        icon: <InfoCircle color="#B2ABAB" variant="Broken" />,
        path: '/updates'
    },
]

const orders = [
    {
        id: 1,
        userImage: user1,
        username: "Marcus Bergson",
        amount: 80000,
        date: 'Nov 15, 2023',
        status: 1
    },
    {
        id: 2,
        userImage: user2,
        username: "Jaydon Vaccaro",
        amount: 150000,
        date: 'Nov 15, 2023',
        status: 0
    },
    {
        id: 3,
        userImage: user3,
        username: "Corey Schleifer",
        amount:  87000,
        date: 'Nov 14, 2023',
        status: 1
    },
    {
        id: 4,
        userImage: user4,
        username: "Cooper Press",
        amount:  100000,
        date: 'Nov 14, 2023',
        status: 0
    },
    {
        id: 5,
        userImage: user5,
        username: "Phillip Lubin",
        amount:  78000,
        date: 'Nov 14, 2023',
        status: 1
    },
]


export {barTabs, orders}