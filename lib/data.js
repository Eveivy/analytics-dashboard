import { Category, TrendUp, Profile2User, Box, DiscountShape, InfoCircle } from "iconsax-react"
import { usePathname } from "next/navigation"

// const path = usePathname()
// console.log()

export const barTabs = [
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