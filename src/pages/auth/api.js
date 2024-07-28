import axios from "axios";

export const login = async (data) => {
    try {
        const response = await axios.post(
            "https://saviorte.pythonanywhere.com/api/login/",
            data
        );

        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        return error;
    }
};

export const createAccount = async (data) => {
    try {
        const response = await axios.post(
            "https://saviorte.pythonanywhere.com/api/signup/",
            data
        );
        
        if (response.status === 201) {
            return response.data;
        }
    } catch (error) {
        return error;
    }
}