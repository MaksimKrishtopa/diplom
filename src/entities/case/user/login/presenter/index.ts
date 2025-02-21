import useGetAdmins from "../use-case";


const useGetMePresenter = (email: string, password: string) => {
    const { data, status, error, refetch, isFetching } = useGetAdmins(email, password);

    return {
        data,
        status,
        error,
        refetch,
        isFetching,
    };
};

export default useGetMePresenter;