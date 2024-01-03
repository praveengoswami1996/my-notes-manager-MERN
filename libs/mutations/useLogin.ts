import { useMutation } from "@tanstack/react-query";
import api from "../../api";
import toast from "react-hot-toast";
import { LoginFormValues } from "types";
import { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { setIsAuthenticated } from "store/features/auth-slice";
import { AppDispatch } from "store/store";

const useLogin = () => {
    const dispatch = useDispatch<AppDispatch>();

    const login = useMutation({
        mutationFn: async (data: LoginFormValues) => {
            const response = await api.post("/users/login", data);
            return response.data?.data;
        },
        onSuccess: (data) => {
            const { authToken } = data || {};
            toast.success("You are logged in successfully")
            if(authToken) {
              dispatch(setIsAuthenticated(true));
            } 
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