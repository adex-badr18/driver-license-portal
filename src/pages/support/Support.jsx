
import SubmitSuccessful from './components/SubmitSuccessful';
import SupportForm from './components/SupportForm';
import SupportHero from './components/SupportHero';
import { useState } from "react";

const Support = () => {
    const [Popup, SetPopup] = useState(false)

    window.scrollTo(0, 0)


    const [Message, SetMessage] = useState()

    return (
        <main className='p-4 md:px-10 lg:px-20'>
            <SupportHero />
            <SupportForm
                BtnFunction={() => { SetPopup(true) }}
            />

            {
                Popup && <SubmitSuccessful
                    BtnFunction={() => { SetPopup(false) }}
                />
            }
        </main>
    );
};

export default Support;
