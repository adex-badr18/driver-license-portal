import { useState } from "react";
import { useLocation, useLoaderData } from "react-router-dom";
import BasicDetails from "./components/BasicDetails";
import InstantDriverDetails from "./components/InstantDriverDetails";
import LoginDetails from "./components/LoginDetails";
import ProfilePicture from "./components/ProfilePicture";
import { requireAuth } from "../../utils/auth";
import axios from "axios";

import { getLicense, getProfile } from "../../api";
import useAuth from "../../hooks/useAuth";

export const loader = async ({ request }) => {
    await requireAuth(request);

    const auth = JSON.parse(sessionStorage.getItem("auth"));
    // const userId = auth.user.id;

    const profile = getProfile();
    // const license = getLicense(userId);

    // return [profile, license];
    return profile;

    // const user = JSON.parse(sessionStorage.getItem("auth"));
    // const { access } = user;

    // try {
    //     const res = await axios.get(
    //         "https://saviorte.pythonanywhere.com/api/profile/",
    //         {
    //             headers: {
    //                 Authorization: `Bearer ${access}`,
    //             },
    //         }
    //     );

    //     if (res.status === 200) {
    //       console.log(res.data);
    //       return res.data;
    //     }
    // } catch (error) {
    //   console.log(error.response.data);
    //   return error;
    // }
};

const Profile = () => {
    let { state } = useLocation();
    const {auth} = useAuth();
    const {user} = auth;
    const profile = useLoaderData();
    // const [profile, license] = useLoaderData();
    const [profileDetails, setProfile] = useState({
        username: user.username || "",
        password: user.password || "",
        firstname: profile.first_name || "",
        surname: profile.last_name || "",
        middlename: profile.middle_name || "",
        dob: profile.date_of_birth || "",
        phone: profile.phone_number || "",
        email: user.email || "",
        StateofAddress: profile.state_of_residence || "",
        lga: profile.local_govt_area || "",
        address: profile.street_address || "",
        gender: profile.gender || "",
        licenseId: "--",
        certificateNumber: "--",
        nin: profile.nin || "",
        joined: "21-12-3034",
        lastRenewal: "--",
        nextRenewal: "--",
        image: profile.passport_photo || "",
    });

    // console.log(profile);

    // console.log({ profileDetails });

    const editFirstName = (args) => {
        setProfile({
            ...profileDetails,
            firstname: args,
        });
    };
    const editMiddleName = (args) => {
        setProfile({
            ...profileDetails,
            middlename: args,
        });
    };
    const editSurname = (args) => {
        setProfile({
            ...profileDetails,
            surname: args,
        });
    };
    const editEmail = (args) => {
        setProfile({
            ...profileDetails,
            email: args,
        });
    };
    const editGender = (args) => {
        setProfile({
            ...profileDetails,
            gender: args,
        });
    };
    const editAddress = (args) => {
        setProfile({
            ...profileDetails,
            address: args,
        });
    };
    const editPhone = (args) => {
        setProfile({
            ...profileDetails,
            phone: args,
        });
    };
    const editDob = (args) => {
        setProfile({
            ...profileDetails,
            dob: args,
        });
    };
    const editState = (args) => {
        console.log(args);
        setProfile({
            ...profileDetails,
            StateofAddress: args,
        });
    };
    const editLga = (args) => {
        setProfile({
            ...profileDetails,
            lga: args,
        });
    };
    const editImage = (event) => {
        let reader = new FileReader();
        let file = event.target.files[0];
        console.log(event.target.files[0]);
        reader.onloadend = () => {
            setProfile({
                ...profileDetails,
                image: reader.result,
                file: file,
            });
        };
        reader.readAsDataURL(file);
    };

    return (
        <section className="w-screen py-7 md:py-12 xl:py-20 px-4 md:px-10 xl:px-16 bg-[#f2f2f2]">
            <h3 className="text-[28px]/[36px] md:text-[44px]/[56px] font-bold">
                Profile Details
            </h3>

            <div className="w-full">
                <ProfilePicture state={profileDetails} editImage={editImage} />
                <BasicDetails
                    state={profileDetails}
                    editAddress={editAddress}
                    editDob={editDob}
                    editEmail={editEmail}
                    editFirstName={editFirstName}
                    editGender={editGender}
                    editMiddleName={editMiddleName}
                    editPhone={editPhone}
                    editSurname={editSurname}
                    editLga={editLga}
                    editState={editState}
                />
                <LoginDetails state={profileDetails} />
                <InstantDriverDetails state={profileDetails} />
            </div>
        </section>
    );
};

export default Profile;
