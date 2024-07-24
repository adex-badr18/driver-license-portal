import { BsFillPeopleFill } from "react-icons/bs";
import { FaIdCard } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { useInView } from "react-intersection-observer";

const CounterDisplay = () => {

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
        triggerOnce: true
      });

    return (
        <section ref={ref} className="px-6 xl:px-40 md:px-10 py-16  md:py-20 grid gap-12 md:grid-cols-3 md:gap-16 xl:gap-24">
            <article>
                <div className=" rounded shadow-md bg-white flex items-center rotate-3 mb-6">
                    <PiCertificateFill className="w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24"/>
                </div>
                <h2>
                    <span className={`flex tabular-nums text-slate-900 text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2 ${inView ? "animate-[counter_3s_ease-out_forwards]":null } [counter-set:_num_var(--num-verification)] before:text-[#22C55E] before:content-[counter(num)]` }>
                        <span className="sr-only ">40</span>K+
                    </span>
                    <span className="inline-flex md:text-3xl lg:text-4xl text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-300 mb-2">Verifications</span>
                </h2>
                <p className="text-base text-slate-700 font-semibold">One step verification in a minute</p>
            </article>
            <article>
                <div className=" rounded shadow-md bg-white flex items-center rotate-3 mb-6">
                    <FaIdCard className="w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24"/>
                </div>
                <h2>
                    <span className={`flex tabular-nums text-slate-900 text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2 ${inView ? "animate-[counter_3s_ease-out_forwards]":null } [counter-set:_num_var(--num-license)] before:text-[#22C55E]  before:content-[counter(num)]`}>
                        <span className="sr-only">40</span>K+
                    </span>
                    <span className="inline-flex md:text-3xl lg:text-4xl text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-300 mb-2">Licenses</span>
                </h2>
                <p className="text-base text-slate-700 font-semibold">Four step procedures get it done </p>
            </article>
            <article>
                <div className=" rounded shadow-md bg-white flex  items-center rotate-3 mb-6">
                    <BsFillPeopleFill className="w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24" />
                </div>
                <h2>
                    <span className={`flex tabular-nums text-slate-900 text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2 ${inView ? "animate-[counter_3s_ease-out_forwards]":null } [counter-set:_num_var(--num-users)] before:text-[#22C55E]  before:content-[counter(num)]`}>
                        <span className="sr-only text-[#22C55E]">40</span>K+
                    </span>
                    <span className="inline-flex md:text-3xl lg:text-4xl text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-300 mb-3">Users</span>
                </h2>
                <p className="text-base text-slate-700 font-semibold">Join the world of liccense holders Today</p>
            </article>
    </section>
    )
}

export default CounterDisplay
