import { FaArrowRightLong } from "react-icons/fa6";



const Services = () => {
    return (
        <section className='bg-slate-200 w-full  py-20 px-24 flex flex-col'>
            <h3 className="text-text-custom-black text-[86px]/[67.2px] font-medium text-center">
            Our Services
            </h3>

            <div className='grid grid-cols-3 mt-20 flex-wrap self-center gap-20'>
                <div className='  border-[#F4F4F4] border-t-[#ffc169] border-t-[16px] border bg-[#fdf8f1] bg-white flex flex-col rounded-xl p-10 gap-7 items-start'>
                  <div className=' w-16 h-16 rounded-lg bg-contain bg-[url("src/assets/images/certificate-of-origin.png")] self-center'></div>
                    <p className='font-semibold text-[29px]/[26.4px] self-center'>
                        New Application
                    </p>
                    <p className='font-normal text-black text-[17px]/[22px] text-wrap flex-1 text-left'>
                    ✓  Applicant must be 18 years and above <br/>
                        ✓   Apllicant must have completed driving school
                    </p>
                    <a className='text-white p-4 bg-[#22C55E] rounded-lg font-bold text-lg flex gap-1 border-b w-fit items-center self-center gap-4 cursor-pointer'>
                        Apply Now
                        <FaArrowRightLong />
                    </a>
                </div>
                <div className='border-t-[#83c6f3] border-[#F4F4F4] border border-t-[16px] bg-[#f0f9ff] flex flex-col rounded-xl p-10 gap-7 items-start'>
                  <div className=' w-16 h-16 rounded-lg bg-contain bg-[url("src/assets/images/renewal.png")] self-center'></div>
                   <p className='font-semibold text-[29px]/[26.4px] self-center'>
                       Renew
                   </p>
                    <p className='font-normal text-black text-[17px]/[22px] text-wrap flex-1 text-left'>
                    ✓  Applicant must be 18 years and above<br/>
                    ✓  Apllicant must have completed driving school
                    </p>
                    <a className='text-white p-4 bg-[#22C55E] rounded-lg font-bold text-lg flex gap-1 border-b w-fit items-center self-center gap-4 cursor-pointer'>
                        Apply Now
                        <FaArrowRightLong />
                    </a>
                </div>
                <div className='border-[#F4F4F4]  border border-t-[#4cffff] border-t-[16px] bg-[#f5fbf1] flex flex-col rounded-xl p-10 gap-7 items-start'>
                    <div className=' w-16 h-16 rounded-lg bg-contain bg-[url("src/assets/images/business.png")] self-center'></div>
                        <p className='font-semibold text-[29px]/[26.4px] self-center'>
                            Reissue
                        </p>
                        <p className='font-normal text-black text-[17px]/[22px] text-wrap text-left flex-1'>
                        ✓   Applicant must be 18 years and above <br/>
                            ✓   Apllicant must have completed driving school                     
                        </p>
                        <a className='text-white p-4 bg-[#22C55E] rounded-lg font-bold text-lg flex gap-1 border-b w-fit items-center self-center gap-4 cursor-pointer'>
                            Apply now
                           <FaArrowRightLong />
                        </a>
                </div>
                <div className='border-[#F4F4F4] border border-t-[#ffc169] border-t-[16px] bg-[#fdf8f1] flex flex-col rounded-xl p-10 gap-7 items-start'>
                  <div className=' w-16 h-16 rounded-lg bg-contain bg-[url("src/assets/images/edit.png")] self-center'></div>
                    <p className='font-semibold text-[29px]/[26.4px] self-center'>
                        Edit Application
                    </p>
                    <p className='font-normal text-black text-[17px]/[22px] text-wrap flex-1 text-left'>
                    ✓  Applicant must be 18 years and above <br/>
                    ✓     Apllicant must have completed driving school
                    </p>
                    <a className='text-white p-4 bg-[#22C55E] rounded-lg font-bold text-lg flex gap-1 border-b w-fit items-center self-center gap-4 cursor-pointer'>
                       Apply Now
                        <FaArrowRightLong />
                    </a>
                </div>
                <div className='border-[#F4F4F4] border border-t-[#83c6f3] border-t-[16px] bg-[#f0f9ff] flex flex-col rounded-xl p-10 gap-7 items-start'>
                  <div className=' w-16 h-16 rounded-lg bg-contain bg-[url("src/assets/images/print.png")] self-center'></div>
                    <p className='font-semibold text-[29px]/[26.4px] self-center'>
                        Print Application Form
                    </p>
                    <p className='font-normal text-black text-[17px]/[22px] text-wrap flex-1 text-left'>
                    ✓  Applicant must be 18 years and above<br/>
                    ✓  Apllicant must have completed driving school
                    </p>
                    <a className='text-white p-4 bg-[#22C55E] rounded-lg font-bold text-lg flex gap-1 border-b w-fit items-center self-center gap-4 cursor-pointer'>
                        Apply Now
                        <FaArrowRightLong />
                    </a>
                </div>
                <div className='border-[#F4F4F4] border border-t-[#4cffff] border-t-[16px] bg-[#f5fbf1] flex flex-col rounded-xl p-10 gap-7 items-start'>
                    <div className=' w-16 h-16 rounded-lg bg-contain bg-[url("src/assets/images/print.png")] self-center'></div>
                    <p className='font-semibold text-[29px]/[26.4px] text-wrap self-center'>
                        Print Acknowledgement Slip
                    </p>
                    <p className='font-normal text-black text-[17px]/[22px] text-wrap text-left flex-1'>
                    ✓   Applicant must be 18 years and above <br/>
                    ✓    Apllicant must have completed driving school                     
                    </p>
                    <a className='text-white p-4 bg-[#22C55E] rounded-lg font-bold text-lg flex gap-1 border-b w-fit items-center self-center gap-4 cursor-pointer'>
                        Apply now
                            <FaArrowRightLong />
                    </a>
                </div>            
            </div>


        </section>
    )
}

export default Services
