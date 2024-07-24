import Button from "../../../components/utils/Button"


const SupportForm = ({ BtnFunction }) => {


    const inputStyle = "w-full rounded-md border border-[#e0e0e0] py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"

    return (
        <div className="md:mt-8 mt-4 pt-4 md:pt-10">
            <div className="grid md:grid-cols-2 text-sm gap-x-16 gap-y-6">

                <div >
                    <label className="mb-[2px] block text-base font-medium text-neutral-700">Application ID <span className="text-red-500">*</span></label>
                    <input className={inputStyle} type="text" placeholder="Enter Application ID" required />
                </div>
                <div>
                    <label className="mb-[2px] block text-base font-medium text-neutral-700">Driver's Licence Number (dd/mm/yyyy) <span className="text-red-500">*</span></label>
                    <input className={inputStyle} type="text" placeholder="e.g 01/01/2024" required />
                </div>
                <div>
                    <label className="mb-[2px] block text-base font-medium text-neutral-700">Date of Birth (dd/mm/yyyy) <span className="text-red-500">*</span></label>
                    <input className={inputStyle} type="text" placeholder="e.g 01/01/2024" required />
                </div>
                <div>
                    <label className="mb-[2px] block text-base font-medium text-neutral-700">Full Name <span className="text-red-500">*</span></label>
                    <input className={inputStyle} type="text" placeholder="e.g John Doe" required />
                </div>
                <div>
                    <label className="mb-[2px] block text-base font-medium text-neutral-700">Contact Number <span className="text-red-500">*</span></label>
                    <input className={inputStyle} type="text" placeholder="e.g +2349009000222" required />
                </div>
                <div>
                    <label className="mb-[2px] block text-base font-medium text-neutral-700">Email Address <span className="text-red-500">*</span></label>
                    <input className={inputStyle} type="email" placeholder="e.g +2349009000222" required />
                </div>
                <div>
                    <label className="mb-[2px] block text-base font-medium text-neutral-700">Comments <span className="text-red-500">*</span></label>
                    <textarea className={inputStyle} name="" id="" required></textarea>
                </div>

            </div>
            <div className="mt-10 grid place-content-end">
                <Button BtnFunction={BtnFunction}>
                    Submit
                </Button>

            </div>
        </div>
    )
}

export default SupportForm