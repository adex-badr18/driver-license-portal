

const SupportForm = () => {
    const inputStyle = "border outline-0 rounded-md w-full py-3 px-4 text-sm md:text-base"

    return (
        <div className="md:mt-8 mt-4 border-t pt-4 md:pt-10">
            <div className="grid md:grid-cols-2 text-sm gap-x-16 gap-y-6">

                <div >
                    <small className="block text-xs mb-2">Application ID <span className="text-red-500">*</span></small>
                    <input className={inputStyle} type="text" placeholder="Enter Application ID" />
                </div>
                <div>
                    <small className="block text-xs mb-2">Driver's Licence Number (dd/mm/yyyy) <span className="text-red-500">*</span></small>
                    <input className={inputStyle} type="text" placeholder="e.g 01/01/2024" />
                </div>
                <div>
                    <small className="block text-xs mb-2">Date of Birth (dd/mm/yyyy) <span className="text-red-500">*</span></small>
                    <input className={inputStyle} type="text" placeholder="e.g 01/01/2024" />
                </div>
                <div>
                    <small className="block text-xs mb-2">Full Name <span className="text-red-500">*</span></small>
                    <input className={inputStyle} type="text" placeholder="e.g John Doe" />
                </div>
                <div>
                    <small className="block text-xs mb-2">Contact Number <span className="text-red-500">*</span></small>
                    <input className={inputStyle} type="text" placeholder="e.g +2349009000222" />
                </div>
                <div>
                    <small className="block text-xs mb-2">Email Address <span className="text-red-500">*</span></small>
                    <input className={inputStyle} type="email" placeholder="e.g +2349009000222" />
                </div>
                <div>
                    <small className="block text-xs mb-2">Comments <span className="text-red-500">*</span></small>
                    <textarea className={inputStyle} name="" id=""></textarea>
                </div>
                <div>
                    <small className="block text-xs mb-2">Please enter code as displayed <span className="text-red-500">*</span></small>
                    <div className="flex"  >
                        <div className="capcha w-20">capcha text</div>
                        <input className="border rounded-md w-40 py-2 px-4" type="text" />
                    </div>
                </div>
            </div>
            <div className="mt-10 grid place-content-end">
                <button className="bg-green-500 text-white py-2.5 px-8 rounded-md">Submit</button>
            </div>
        </div>
    )
}

export default SupportForm