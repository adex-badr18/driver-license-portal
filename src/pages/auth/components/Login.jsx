import { useState, useEffect } from "react";
import axios from "axios";
import { loginFields } from "../constants/FormFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-hot-toast";
import { login } from "../api";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login({ paragraph, linkUrl, linkName }) {
    const [loginState, setLoginState] = useState(fieldsState);
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { setAuth } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");
        setIsSubmitting(true);

        const data = {
            email: loginState["email"],
            password: loginState["password"],
        };
        const loginResponse = await login(data);

        if (loginResponse.access) {
            setAuth(loginResponse);
            sessionStorage.setItem("auth", JSON.stringify(loginResponse));
            navigate("/dashboard");
            return;
        }

        setIsSubmitting(false);
        setError("Invalid login details, please try again.");
    };

    return (
        <>
            <form className="space-y-6 px-6 py-4" onSubmit={handleSubmit}>
                {error && (
                    <p className="bg-red-100 text-red-700 py-2 px-4 rounded-md">
                        {error}
                    </p>
                )}
                <div className="-space-y-px">
                    {fields.map((field) => (
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                        />
                    ))}
                </div>

                <FormExtra />
                <button
                    className="bg-custom-green w-full hover:bg-green-600 px-4 py-2 text-white font-medium rounded-lg mt-4"
                    onSubmit={handleSubmit}
                    type="submit"
                >
                    {isSubmitting ? (
                        <div className="flex justify-center gap-4">
                            <div className="w-6 h-6 rounded-full animate-spin border-y-4 border-solid border-white border-t-transparent shadow-md"></div>
                            <span>Logging in...</span>
                        </div>
                    ) : (
                        "Login"
                    )}
                </button>
                <p className="mt-2 text-center text-sm text-gray-600">
                    {paragraph}{" "}
                    <Link
                        to={linkUrl}
                        className="font-medium text-custom-green hover:text-green-800"
                    >
                        {linkName}
                    </Link>
                </p>
            </form>
        </>
    );
}
