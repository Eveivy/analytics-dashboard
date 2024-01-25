import Image from "next/image"
import comingSoonImg from '@/public/assets/images/coming-soon.png'

function Updates() {
    return (
        <div className="flex items-center justify-center w-full h-screen"> 
            <Image src={comingSoonImg} alt="coming soon image"/>
        </div>
      )
}

export default Updates