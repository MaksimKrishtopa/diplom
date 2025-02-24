import {useMutation} from "@tanstack/react-query";
import {IAdminProps} from "@/entities/type.ts";
import {fetchAdmin} from "@/entities/repository";
import {useContext} from "react";
import {UserContext} from "@/app/provider/context/user";


enum EAdminKeyResponse {
    keyAuth = "admin-authorization",
}


const useGetAdmins = () => {
    const { setAuthError} = useContext(UserContext);
    return useMutation<IAdminProps[], Error, { email: string; password: string }>({
        mutationKey: [EAdminKeyResponse.keyAuth],
        mutationFn: ({ email, password }) => fetchAdmin(email, password),
        onSuccess: (data) => {
            if (data.length > 0) {
                const userData = data[0];
                // setUser(userData);
                console.log(userData);
                setAuthError(null)
                console.log("Успешная авторизация!", userData);
            } else {
                setAuthError("Неверные данные!");
                console.log("Неверные данные!");
            }
        },
        onError: (error) => {
            setAuthError("Ошибка при авторизации");
            console.error("Ошибка при выполнении запроса:", error);
        },
    });
};

export default useGetAdmins;