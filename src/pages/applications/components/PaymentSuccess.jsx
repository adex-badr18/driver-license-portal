
import { useState } from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";


const PaymentSuccess = ({ step, setStep, setIsPaid }) => {
    const [isProcessing, setIsProcessing] = useState(false);

    const goToReview = () => {
        setIsProcessing(true);

        setTimeout(() => {
            setIsProcessing(false);
            setIsPaid(true);
            setStep(step + 1);
        }, 1000);
    }

    return (
        <div className="flex flex-col gap-5 p-4">
            <div className="flex justify-center items-center self-center p-1 bg-neutral-100 rounded-full shadow-md h-20 w-20">
                <div className="flex justify-center items-center p-1 bg-neutral-200 rounded-full h-16 w-16">
                    <IoCheckmarkDoneCircle className="text-5xl text-green-700" />
                </div>
            </div>

            <div className="flex flex-col items-center">
                <h3 className="text-lg font-bold mb-5">
                    Your payment has been successfully processed!
                </h3>
                <p className="">
                    Please review your biodata and contact information
                </p>
                <p className="">before you submit your application.</p>
            </div>

            <div className="flex flex-col gap-2 mt-1">
                <button
                    className="w-full bg-custom-green hover:bg-green-600 px-4 py-3 text-white font-medium tracking-widest rounded-lg"
                    onClick={goToReview}
                >
                    {isProcessing ? (
                        <div className="flex justify-center gap-4">
                            <div className="w-6 h-6 rounded-full animate-spin border-y-4 border-solid border-white border-t-transparent shadow-md"></div>
                            <span>Wait...</span>
                        </div>
                    ) : (
                        "Review Your Information"
                    )}
                </button>
            </div>
        </div>
    );
};

export default PaymentSuccess;
