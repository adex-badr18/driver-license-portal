import { useState } from "react";
import axios from "axios";
import { loginFields } from "../constants/FormFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import { Link } from "react-router-dom";

// new-snippet
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { getProfile } from "../../../api";

// End of new-snippet

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login({ paragraph, linkUrl, linkName }) {
    const [loginState, setLoginState] = useState(fieldsState);
    const [submitting, setSubmitting] = useState(false);

    // new-snippet
    const { auth, setAuth } = useAuth();
    const navigate = useNavigate();
    // End of new-snippet

    const handleChange = (e) => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);

        setTimeout(() => {
            authenticateUser();
        }, 2000);
    };

    //Handle Login API Integration here
    const authenticateUser = async () => {
        const email = loginState["email-address"];
        const password = loginState["password"];

        const res = await axios.post("https://saviorte.pythonanywhere.com/api/login/", {email, password});

        if (res.status === 200) {
            const auth = res.data;
            setAuth(auth);
            sessionStorage.setItem("auth", JSON.stringify(auth));
            setSubmitting(false);
            window.scrollTo(0, 0);
            navigate('/dashboard');
        }

        // new-snippet
        // const res = await axios.get(
        //     `http://localhost:3000/users?email=${email}&password=${password}`,
        // );

        // if (res.status === 200) {
        //     const auth = { user: res.data[0] };
        //     setAuth(auth);
        //     sessionStorage.setItem("auth", JSON.stringify(auth));
        //     const profile = await getProfile(auth.user.id);
        //     sessionStorage.setItem("profile", JSON.stringify(profile));
        //     setSubmitting(false);
        //     navigate('/dashboard');
        // }
        // console.log(res.status);
        // if (res.status === 200) {
        //   const token = res.data.token;
        //   const fullUserRes = await axios.get('https://dummyjson.com/auth/me', {
        //     headers: {
        //       'Authorization': `Bearer ${token}`,
        //     }
        //   });

        //   if (fullUserRes.status === 200) {
        //     sessionStorage.setItem('user', JSON.stringify(fullUserRes.data));
        //   }

        //   const user = res.data;
        //   setAuth({ user });
        //   sessionStorage.setItem('auth', JSON.stringify({ user }));
        //   navigate('/dashboard');
        // }
        // End of new-snippet
    };

    return (
        <>
            <form className="space-y-6 px-6 py-4" onSubmit={handleSubmit}>
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
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-custom-green hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-green mt-10"
                    onSubmit={handleSubmit}
                >
                    {submitting ? (
                        <div className="flex justify-center items-center gap-4">
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
