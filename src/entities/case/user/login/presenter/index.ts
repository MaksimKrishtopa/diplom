import useGetAdmins from "../use-case";
const useGetMePresenter = () => {
    const { mutate, data,status} = useGetAdmins();

    return {
        mutate,
        data,
        status
    };
};

export default useGetMePresenter;