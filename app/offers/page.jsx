import Image from "next/image"
import comingSoonImg from '@/public/assets/images/coming-soon.png'

const Offers = () => {
    return (
        <div className="flex items-center justify-center h-screen absolute left-[77px] right-0"> 
            <Image src={comingSoonImg} alt="coming soon image"/>
        </div>
      )
}

export default Offers