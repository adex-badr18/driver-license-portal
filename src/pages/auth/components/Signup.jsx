import { useState } from "react";
import { signupFields } from "../constants/FormFields";
import { Link } from "react-router-dom";
import FormAction from "./FormAction";
import Input from "./Input";
import axios from "axios";
import CustomModal from "../../applications/components/CustomModal";
import SignUpResponse from "./SignUpResponse";

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signup({ paragraph, linkUrl, linkName }) {
    const [signupState, setSignupState] = useState(fieldsState);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e) =>
        setSignupState({ ...signupState, [e.target.id]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmitting(true);
        setTimeout(() => {
            createAccount();
        }, 2000);
        // setSubmitting(false);
    };

    const clearForm = () => {
        signupState.email = "";
        signupState.username = "";
        signupState.password = "";
        signupState.confirm_password = "";
    };

    //handle Signup API Integration here
    const createAccount = async () => {
        const { username, email, password, confirm_password } = signupState;
        const data = {
            username,
            email,
            password,
            confirm_password,
        };

        // try {
        //     const res = await axios.post("http://localhost:3000/users", data);

        //     if (res.status === 201) {
        //         // console.log(res.data);
        //         const user = res.data;

        //         const reqBody = {
        //             id: user.id,
        //             userId: user.id,
        //             first_name: "",
        //             last_name: "",
        //             middle_name: "",
        //             gender: "",
        //             date_of_birth: "",
        //             nin: "",
        //             street_address: "",
        //             state_of_residence: "",
        //             local_govt_area: "",
        //             mothers_maiden_name: "",
        //             phone_number: "",
        //             passport_photo: "",
        //         };
        //         const createProfile = await axios.post(
        //             "http://localhost:3000/profiles",
        //             reqBody
        //         );

        //         if (createProfile.status === 201) {
        //             // console.log(createProfile.data);
        //             const profile = createProfile.data;

        //             const licenseData = {
        //                 id: profile.userId,
        //                 userId: profile.userId,
        //                 license_id: "",
        //                 vehicle_type: "",
        //                 license_class: "",
        //                 date_of_issue: "",
        //                 date_of_expiry: "",
        //                 country_of_issue: "",
        //             };

        //             const licenseRes = await axios.post(
        //                 "http://localhost:3000/licenses",
        //                 licenseData
        //             );

        //             if (licenseRes.status === 201) {
        //                 setSubmitting(false);
        //                 setIsModalOpen(true);
        //                 clearForm();
        //             }

        //         } else {
        //             console.log(createProfile);
        //         }
        //     }
        // } catch (error) {
        //     console.log(error);
        // }

        const res = await axios.post(
            "https://saviorte.pythonanywhere.com/api/signup/",
            data,
            // {
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            // }
        );

        if (res.status === 201) {
            setIsModalOpen(true);
            clearForm();
        }
        setSubmitting(false);

        console.log(res);
        console.log(res.data);
    };

    return (
        <form className="space-y-6 p-6" onSubmit={handleSubmit}>
            <div className="">
                {fields.map((field) => (
                    <Input
                        key={field.id}
                        handleChange={handleChange}
                        value={signupState[field.id]}
                        labelText={field.labelText}
                        labelFor={field.labelFor}
                        id={field.id}
                        name={field.name}
                        type={field.type}
                        isRequired={field.isRequired}
                        placeholder={field.placeholder}
                    />
                ))}

                <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-custom-green hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-green mt-10"
                    onSubmit={handleSubmit}
                >
                    {submitting ? (
                        <div className="flex justify-center items-center gap-4">
                            <div className="w-6 h-6 rounded-full animate-spin border-y-4 border-solid border-white border-t-transparent shadow-md"></div>
                            <span>Creating...</span>
                        </div>
                    ) : (
                        "Create Account"
                    )}
                </button>
            </div>

            <p className="mt-2 text-center text-sm text-gray-600">
                {paragraph}{" "}
                <Link
                    to={linkUrl}
                    className="font-medium text-custom-green hover:text-green-800"
                >
                    {linkName}
                </Link>
            </p>

            <CustomModal isOpen={isModalOpen}>
                <SignUpResponse setIsModalOpen={setIsModalOpen} />
            </CustomModal>
        </form>
    );
}
