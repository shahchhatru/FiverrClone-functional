import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroBanner from '@/components/HeroBanner'
import Companies from '@/components/Companies'
import PopularServices from '@/components/PopularServices'
import FiverrBusiness from '@/components/FiverrBusiness'
import JoinFiverr from '@/components/JoinFiverr'
import Everything from '@/components/Everything'
import Services from '@/components/Services'
import AuthWrapper from '@/components/AuthWrapper'
import {useStateProvider} from '../context/StateContext';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [{showLoginModal,showSignupModal}]=useStateProvider()

  return (
    <main>
    <HeroBanner/>
    <Companies/>
    <PopularServices />
    <Everything/>
    <Services/>
    <FiverrBusiness/>
    <JoinFiverr/>
    {
      (showLoginModal || showSignupModal ) &&  <AuthWrapper type={showLoginModal?'login':"signup"} />
    }
    
    
     </main>
  )
}
