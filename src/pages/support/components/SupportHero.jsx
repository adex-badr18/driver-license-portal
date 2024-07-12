import customercare from "../../../assets/customercare.png"
import phone from "../../../assets/phone.svg"
import envelop from "../../../assets/envelop.svg"

const SupportHero = () => {
    return (
        <div className=" mb-8 grid gap-8 md:flex items-center ">
            <div className="w-full">
                <h1 className="text-custom-green text-3xl md:text-6xl font-bold mb-4 md:mb-10  lg:mb-20">Support</h1>
                <p className="md:text-base/8 text-sm text-justify">Don't hesitate to reach out to our friendly customer support team. They are happy to assist you with any questions or challenge you may encounter on this platform. you can reach out to us via the channels below</p>

                <div className="grid gap-4 mt-6">
                    <div className="flex gap-3 items-start">
                        <img className="w-6" src={phone} alt="" />
                        <p>+234900123456</p>

                    </div>
                    <div className="flex gap-3">
                        <img className="w-6" src={envelop} alt="" />
                        <p>idl_support@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="w-full md:grid place-content-end">

                <img className="w-full  rounded-lg  object-cover" src={customercare} alt="" />
            </div>



        </div>

    )
}

export default SupportHero