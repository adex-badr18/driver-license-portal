import React from "react";
import { useLocation } from "react-router-dom";
import heroImg from "../../assets/hand-card.webp";
import LinkButton from "../../components/LinkButton";
import {
    newApplicationProcedure,
    renewalProcedure,
    reissueProcedure,
} from "./data";
import ProcedureListItem from "../../components/ProcedureListItem";

const ApplicationHome = () => {
    const { state } = useLocation();
    const { type } = state;
    const procedure =
        type === "new"
            ? newApplicationProcedure
            : type === "renewal"
            ? renewalProcedure
            : reissueProcedure;
    console.log(state);

    return (
        <div className="flex flex-col gap-4 md:gap-6">
            <div className="flex flex-col md:flex-row gap-4 md:justify-between items-center px-6 md:px-10 py-4 md:py-6">
                <h1 className="text-custom-green md:leading-snug text-center md:text-start font-black text-3xl sm:text-4xl md:text-6xl">
                    {type === "new"
                        ? "New Driver's License Application"
                        : type === "renewal"
                        ? "Online Driver's License Renewal"
                        : "Driver's License Replacement/Re-Issue"}
                </h1>

                <img
                    src={heroImg}
                    className="w-1/3 h-auto"
                    alt="Hand holding a card"
                />
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:justify-between bg-gray-100 px-6 md:px-10 py-4 md:py-6">
                <div className="flex flex-col gap-6 md:w-1/3">
                    <p className="text-grey md:text-lg leading-relaxed">
                        This driver's license application saves you time by
                        allowing you to complete the application and make
                        payment before visiting a capturing center for
                        biometrics. When you arrive at the center, officials can
                        quickly access your completed form and complete the
                        process.
                    </p>

                    <LinkButton
                        buttonText="Start Application"
                        linkTo="/application/form"
                        state={{type}}
                        classAttr="self-start py-3 px-8 rounded-full bg-custom-green text-white text-center hover:bg-green-600"
                    />
                </div>

                <div className="flex flex-col gap-4 md:gap-6 shadow-lg p-8 md:-my-10 bg-white md:w-3/5 border border-gray-200">
                    <h2 className="text-xl md:text-3xl font-medium text-custom-green">
                        Before you begin...
                    </h2>
                    {procedure.map((procedure, index) => (
                        <ProcedureListItem
                            key={index}
                            listItemData={procedure}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ApplicationHome;
