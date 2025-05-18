import RegisterForm from "@/features/auth/form/registration/RegisterForm";
import style from "@/pages/register/style";

const RegisterPage = () => {
  return (
    <div className={style.wrapper}>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
