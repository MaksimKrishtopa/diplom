import { useQuery, UseQueryResult } from "@tanstack/react-query";
import {IAdminProps} from "@/entities/type.ts";
import {fetchAdmin} from "@/entities/repository";


enum EAdminKeyResponse {
    keyAuth = "admin-authorization",
}

const useGetAdmins = (email: string, password: string): UseQueryResult<IAdminProps[], Error> => {
    return useQuery({
        queryKey: [EAdminKeyResponse.keyAuth, email, password],
        queryFn: () => fetchAdmin(),
        enabled: false,
    });
};

export default useGetAdmins;