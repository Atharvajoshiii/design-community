import Bentodemo from './bentogrid';
import PricingTable, { PricingTab } from './pricing';

export const Pricing = () => {
  return (

    <div className="bg-black text-white  bg-gradient-to-b from-[#5D2CA8] to-black py-[72px] sm:py-24 ">

      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">Mentor Ship Program</h2>
        <div className='max-w-xl mx-auto'>
        
        </div>
        <div className="flex flex-col items-center justify-center sm:flex-row gap-4 px-24 py-[72px] sm:py-24  ">
          <PricingTable/>
          

        </div>

      </div>


    </div>
  )
}
