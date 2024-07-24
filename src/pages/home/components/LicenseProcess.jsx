import React from 'react'
import payment from "../../../assets/images/credit-card.png"
import cardImg from "../../../assets/images/credit-cards.png"
import fingerprint from "../../../assets/images/fingerprint.png"
import phoneImg from "../../../assets/images/process.png"

const LicenseProcess = () => {
    return (
        <section className='w-full p-4 md:p-10 lg:p-20 flex-col lg:flex-row flex bg-white'>
            <div className='text-2xl md:text-3xl lg:text-[44px]/[45px] text-black font-semibold  text-center p-4 md:p-8 text-wrap flex flex-col items-center justify-center'>
                <em className="text-[#22C55E] ">Four simple steps</em> to get your license done
            </div>
            <div className='grid md:grid-cols-2'>

            <div className=' flex-1 flex p-6 xl:p-12 items-center gap-6 bg-[#d5ffe4] rounded-lg'>
                <img src={phoneImg} className='flex-1 max-w-[100px] xl:max-w-[110px] object-fit'/>
                <div className='w-full flex-1 text-wrap flex flex-col gap-4 '>
                <p className='bg-[#22C55E] w-16 h-16 rounded-full font-normal text-white text-[20px]/[28px] flex items-center justify-center'>01</p>
                <p className='font-normal text-black text-lg text-wrap text-left'> Start and complete the registration form </p>
                </div>
            </div>
            <div className=' flex-1 flex p-6 xl:p-12 items-center gap-6 rounded-lg'>
            <img src={payment} className='flex-1 max-w-[100px] xl:max-w-[110px] object-fit'/>
                <div className='flex-1 text-wrap flex flex-col gap-4 '>
                <p className='bg-[#22C55E] w-16 h-16 rounded-full font-normal text-white  text-[20px]/[28px] flex items-center justify-center'>02</p>
                <p className='font-normal text-black text-lg text-wrap text-left'> Pay for the license fee,Generate an appointment slip</p>
                </div>
            </div>
            <div className='md:bg-inherit flex-1 flex p-6 xl:p-12 bg-[#d5ffe4] items-center gap-6 rounded-lg'>
            <img src={fingerprint} className='flex-1 max-w-[100px] xl:max-w-[110px] object-fit'/>
                <div className='flex-1 text-wrap flex flex-col gap-4 '>
                <p className='bg-[#22C55E] w-16 h-16 rounded-full font-normal text-white  text-[20px]/[28px] flex items-center justify-center'>03</p>
                <p className='font-normal text-black text-lg text-wrap text-left'> Biometrics registration</p>
                </div>
            </div>
            <div className=' flex-1 flex p-6 xl:p-12 items-center gap-6 md:bg-[#d5ffe4] rounded-lg'>
            <img src={cardImg} className='flex-1 max-w-[100px] xl:max-w-[110px] object-fit'/>
                <div className='flex-1 text-wrap flex flex-col gap-4 '>
                <p className='bg-[#22C55E] w-16 h-16 rounded-full font-normal text-white  text-[20px]/[28px] flex items-center justify-center'>04</p>
                <p className='font-normal text-black text-lg text-wrap text-left'>Done, Driver license </p>
                </div>
            </div>

        </div>
        </section>
    )
}

export default LicenseProcess
