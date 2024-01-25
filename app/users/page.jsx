import Image from "next/image"
import comingSoonImg from '@/public/assets/images/coming-soon.png'

const Users = () => {
    return (
        <div className="flex items-center justify-center w-full h-screen"> 
            <Image src={comingSoonImg} alt="coming soon image"/>
        </div>
      )
}

export default Users