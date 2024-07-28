
import SubmitSuccessful from './components/SubmitSuccessful';
import SupportForm from './components/SupportForm';
import SupportHero from './components/SupportHero';
import { useState } from "react";

const Support = () => {
    const [Popup, SetPopup] = useState(false)

    window.scrollTo(0, 0)


    const [Message, SetMessage] = useState()

    return (
        <div className='p-4 pb-20 w-[100vw] md:px-10 lg:px-20'>
            <SupportHero />
            <SupportForm
                BtnFunction={() => { SetPopup(true) }}
            />

            {
                Popup && <SubmitSuccessful
                    BtnFunction={() => { SetPopup(false) }}
                />
            }
        </div>
    );
};

export default Support;
