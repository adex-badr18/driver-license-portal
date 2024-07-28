import Button from "../../../components/utils/Button"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState, useEffect } from "react"





const SupportForm = ({ BtnFunction }) => {
    const [value, setValue] = useState(null)


    const [formData, setFormData] = useState({})



    useEffect(() => {
        setFormData({
            ...formData,
            phoneNo: value,
        })

    }, [value])

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })

    }


    console.log(formData)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("you submitted a form")
    }





    const inputStyle = "w-full bg-gray-50 mt-1 rounded-md shadow-[0_3px_5px_rgba(0,0,0,0.2)]  py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"

    return (
        <div className="md:mt-8 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.1)] mt-4 pt-6 p-4 md:p-8 lg:p-12">
            <h2 className="text-xl md:text-2xl text-custom-green mb-6 md:mb-10">How can we help?</h2>
            <form onSubmit={handleSubmit} className="md:grid md:grid-cols-2 text-sm gap-x-10 ">


                <div className=" mb-8">
                    <label className="mb-[2px] block text-base font-medium text-neutral-700">Full Name <span className="text-red-500">*</span></label>
                    <input name="fullName" onChange={handleChange} className={inputStyle} type="text" placeholder="e.g John Doe" required />
                </div>
                <div className=" mb-8">
                    <label className="mb-[2px] block text-base font-medium text-neutral-700">Email Address <span className="text-red-500">*</span></label>
                    <input name="email" onChange={handleChange} className={inputStyle} type="email" placeholder="e.g +2349009000222" required />
                </div>
                <div className=" mb-8" >
                    <label className="mb-[2px] block text-base font-medium text-neutral-700">Application ID <span className="text-red-500">*</span></label>
                    <input name="applicationId" onChange={handleChange} className={inputStyle} type="text" placeholder="Enter Application ID" required />
                </div>
                <div className=" mb-8">
                    <label className="mb-[2px] block text-base font-medium text-neutral-700">Driver's Licence Number <span className="text-red-500">*</span></label>
                    <input name="licenseNo" onChange={handleChange} className={inputStyle} type="text" placeholder="e.g 01/01/2024" required />
                </div>
                <div className=" mb-8">
                    <label className="mb-[2px] block text-base font-medium text-neutral-700">Date of Birth (dd/mm/yyyy) <span className="text-red-500">*</span></label>
                    <input name="dob" onChange={handleChange} className={inputStyle} type="date" placeholder="e.g 01/01/2024" required />
                </div>

                <div className=" mb-8">
                    <label className="mb-[2px] bg-transparent block text-base font-medium text-neutral-700">Contact Number <span className="text-red-500">*</span></label>

                    <div className={inputStyle}>
                        <PhoneInput
                            international
                            placeholder="e.g +2349009000222"
                            countryCallingCodeEditable={false}
                            defaultCountry="NG"
                            value={value}
                            onChange={setValue}

                        />

                    </div>
                </div>

                <div className="col-span-2">
                    <label className="mb-[2px] block text-base font-medium text-neutral-700">Comments <span className="text-red-500">*</span></label>
                    <textarea name="comments" onChange={handleChange} className="w-full rounded-md  bg-gray-50 py-4 px-4 text-base shadow-[0_3px_5px_rgba(0,0,0,0.2)] text-[#6B7280] outline-none focus:border-[#6A64F1] mt-1 focus:shadow-md resize-none h-[10rem]" id="" required></textarea>
                </div>

            </form>
            <div className="mt-10 grid place-content-end">
                <Button BtnFunction={BtnFunction}>
                    Submit
                </Button>

            </div>
        </div>
    )
}

export default SupportForm