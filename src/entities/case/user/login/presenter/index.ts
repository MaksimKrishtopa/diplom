import useAuthAdminsUseCase from "../use-case";
const useGetMePresenter = () => {
    const { mutateAsync, data,status} = useAuthAdminsUseCase();

    return {
        mutateAsync,
        data,
        status
    };
};

export default useGetMePresenter;