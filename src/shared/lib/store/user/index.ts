import { Store, useStore } from "@tanstack/react-store";
import IUserStore from "@/shared/interface/user/store";


const userStore = new Store<IUserStore>({
    user: null,
    authMessage: null,
});


const useUserStore = () => useStore(userStore);

const updateUserStore = (params: Partial<IUserStore>): void => {
    userStore.setState((prevState) => ({
        ...prevState,
        ...params,
    }));
};

export { useUserStore, updateUserStore };