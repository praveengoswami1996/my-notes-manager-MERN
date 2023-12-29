import { useMutation } from "@tanstack/react-query";
import api from "../../api";
import toast from "react-hot-toast";
import { LoginFormValues } from "types";
import { AxiosError } from "axios";

const useLogin = () => {
    const login = useMutation({
        mutationFn: async (data: LoginFormValues) => {
            const response = await api.post("/users/login", data);
            return response.data;
        },
        onSuccess: (data) => {
            toast.success("You are logged in successfully")
        },
        onError: (error: AxiosError) => {
            if (error.response) {
                console.error('Error response : ', error.response.data)
                toast.error('Invalid Email or Password');
            } else {
                console.error('Error: ', error.message);
                toast.error("An error occured while login. Please try again.")
            }
        }
    })

    return login;
}

export default useLogin;