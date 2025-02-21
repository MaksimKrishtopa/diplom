import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from './loginSchema';

interface LoginFormValues {
    email: string;
    password: string;
}

export const useLoginForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<LoginFormValues>({
        resolver: yupResolver(loginSchema),
    });

    return {
        register,
        handleSubmit,
        formState: { errors },
        reset
    };
};

