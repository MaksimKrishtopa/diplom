import useGetAdminsUseCase from "../use-case";
const useGetMePresenter = () => {
    const { mutateAsync, data,status} = useGetAdminsUseCase();

    return {
        mutateAsync,
        data,
        status
    };
};

export default useGetMePresenter;