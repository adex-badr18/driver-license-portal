import { FaUserAlt } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { requireAuth } from "../../utils/auth";

import { useLoaderData } from "react-router-dom";
import { getLicense, getProfile } from "../../api";
import { applicationCardData } from "./data";

import Button from "../../components/utils/Button";
import axios from "axios";
import ApplicationCard from "./components/ApplicationCard";

export const loader = async ({ request }) => {
    await requireAuth(request);

    const auth = JSON.parse(sessionStorage.getItem("auth"));
    const userId = auth.user.id;

    try {
        const profile = await getProfile(userId);
        const license = await getLicense(userId);

        return { profile, license };
    } catch (error) {
        return error;
    }
};

const Dashboard = () => {
    const data = useLoaderData();
    const { profile, license } = data;
    const { auth } = useAuth();
    const user = auth.user;

    console.log(profile);
    window.scrollTo(0, 100)

    return (
        <div className="md:px-10 lg:px-20 max-w-[100vw] overflow-hidden px-4  py-4 pb-20 ">
            <div>
                <div className=" flex md:py-4 gap-3 items-center">
                    <div className="w-fit border h-fit p-1 rounded-full ">
                        {!profile.passport_photo ? (
                            <FaUserAlt className="text-4xl" />
                        ) : (
                            <img
                                className="h-16 md:h-20 rounded-full"
                                src={profile.passport_photo}
                                alt=""
                            />
                        )}
                    </div>
                    <div>
                        <h1 className="text-2xl md:text-3xl">
                            Hello{" "}
                            <span className="text-custom-green font-bold">
                                {user.username}
                            </span>{" "}
                        </h1>
                        <h1 className="text-xl">Welcome Back!</h1>
                    </div>
                </div>

                {/* <div className="flex gap-3">
                    <div className="grid">
                        <div className="inline-block bg-custom-green h-10 w-40">
                            
                        </div>
                        <div className="inline-block bg-green-100 h-20 w-40">

                        </div>
                    </div>
                    <div className="grid">
                        <div className="inline-block bg-custom-green h-10 w-40">

                        </div>
                        <div className="inline-block bg-green-100 h-20 w-40">

                        </div>
                    </div>
                </div> */}
            </div>

            <div className="mx-auto max-w-2xl py-6 md:py-12 lg:max-w-none">
                {/* <h2 class="text-2xl w-2/3 mx-auto font-bold text-gray-900">Collections</h2> */}

                <div className="flex flex-col md:flex-row w-2/3 mx-auto">
                    {applicationCardData.map((cardData) => (
                        <ApplicationCard
                            key={cardData.id}
                            icon={cardData.icon}
                            applicationType={cardData.applicationType}
                            linkTo={cardData.linkTo}
                        />
                    ))}
                </div>
            </div>

            <div className=" md:grid mt-4 md:grid-cols-2 md:gap-10 gap-4 items-start ">
                <div className="border h-fit rounded-lg  p-4">
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-xl font-semibold">
                            Drivers License Details
                        </h1>
                    </div>

                    <div className="border grid  gap-2 p-4 rounded-xl">
                        <p>
                            {" "}
                            <span className="font-bold text-custom-green">
                                License No:
                            </span>{" "}
                            <span className="font-medium">
                                {profile.license_id || "--"}
                            </span>
                        </p>
                        <p>
                            {" "}
                            <span className="font-bold text-custom-green">
                                License Class:
                            </span>{" "}
                            <span className="font-medium">
                                {license.license_class
                                    ? license.license_class
                                    : "--"}
                            </span>
                        </p>
                        <p>
                            {" "}
                            <span className="font-bold text-custom-green">
                                Country of Issue:
                            </span>{" "}
                            <span className="font-medium">
                                {license.country_of_issue
                                    ? license.country_of_issue
                                    : "--"}
                            </span>
                        </p>
                        <p>
                            {" "}
                            <span className="font-bold text-custom-green">
                                Date of Issue:{" "}
                            </span>
                            <span className="font-medium">
                                {license.date_of_issue
                                    ? license.date_of_issue
                                    : "--"}
                            </span>
                        </p>
                        <p>
                            {" "}
                            <span className="font-bold text-custom-green">
                                Date of Expiration:
                            </span>{" "}
                            <span className="font-medium">
                                {license.date_of_expiry
                                    ? license.date_of_expiry
                                    : "--"}
                            </span>
                        </p>
                    </div>
                </div>

                <div className="border mt-4 md:mt-0 h-fit rounded-lg  p-4">
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-xl font-semibold">
                            {" "}
                            Drivers Information
                        </h1>
                    </div>
                    <div className="border grid truncate overflow-clip gap-2 p-4 text-wrap rounded-xl">
                        <p>
                            {" "}
                            <span className="font-bold text-custom-green">
                                First Name:
                            </span>{" "}
                            <span className="font-medium">
                                {profile.first_name ? profile.first_name : "--"}
                            </span>
                        </p>
                        <p>
                            {" "}
                            <span className="font-bold text-custom-green">
                                Last Name:
                            </span>{" "}
                            <span className="font-medium">
                                {profile.last_name ? profile.last_name : "--"}
                            </span>
                        </p>
                        <p>
                            {" "}
                            <span className="font-bold text-custom-green">
                                Email:
                            </span>{" "}
                            <span className=" font-medium ">
                                {user.email ? user.email : "--"}
                            </span>
                        </p>
                        <p>
                            {" "}
                            <span className="font-bold text-custom-green">
                                Sex:{" "}
                            </span>
                            <span className="font-medium capitalize">
                                {profile.gender ? profile.gender : "--"}
                            </span>
                        </p>
                        <p>
                            {" "}
                            <span className="font-bold text-custom-green">
                                Phone No:
                            </span>{" "}
                            <span className="font-medium">
                                {profile.phone_number
                                    ? profile.phone_number
                                    : "--"}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <h1 className="font-bold text-2xl mb-6">Transaction History</h1>
                <div className="max-w-[100vw] overflow-x-hidden">
                    <table className="w-full ">
                        <tr className="bg-custom-green h-10 border-collapse text-white">
                            <th className="p-2 w-16">S/N</th>
                            <th className="p-2 border-x">
                                Transaction Applied
                            </th>
                            <th className="p-2  border-x">Reference No</th>
                            <th className="p-2 ">Status</th>
                        </tr>

                        <tr>
                            <td className="p-2 text-center">1</td>
                            <td className="p-2  border-x">License Renewal</td>
                            <td className="p-2  border-x">12345</td>
                            <td className="p-2  ">Success</td>
                        </tr>
                        <tr className="bg-green-100">
                            <td className="p-2 text-center">2</td>
                            <td className="p-2 border-x">License Renewal</td>
                            <td className="p-2 border-x">12345</td>
                            <td className="p-2 text-red-500">Failed</td>
                        </tr>

                        <tr>
                            <td className="p-2 text-center">3</td>
                            <td className="p-2 border-x">License Renewal</td>
                            <td className="p-2 border-x">12345</td>
                            <td className="p-2 text-orange-500">Pending</td>
                        </tr>

                        <tr className="bg-green-100">
                            <td className="p-2 text-center">4</td>
                            <td className="p-2 border-x">License Renewal</td>
                            <td className="p-2 border-x">12345</td>
                            <td className="p-2">Success</td>
                        </tr>
                    </table>
                </div>
                <div className="mt-10 grid place-content-end">
                    <Button btnLink={"/profile"}>View Transactions</Button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
