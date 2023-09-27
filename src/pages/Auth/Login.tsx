import { Form, Formik } from "formik";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { NavLink } from "react-router-dom";
import { loginSchema } from "../../@schemas/login-schema";
import useLogin from "../../hooks/auth/useLogin";

const Login = () => {
  const { mutate: handleLogin } = useLogin();

  return (
    <div className="p-5">
      <Card>
        <h3 className="font-bold text-center">Login</h3>
        <Formik initialValues={loginSchema.getDefault()} onSubmit={handleLogin}>
          {() => (
            <Form className="mt-5">
              <Input
                type="email"
                label="E-mail"
                name="email"
                autoComplete="off"
              />
              <Input type="password" label="Kata Sandi" name="password" />
              <Button type="submit" variant="success">
                Masuk
              </Button>
            </Form>
          )}
        </Formik>
        <p className="text-center mt-4">
          Belum punya akun ?{" "}
          <NavLink to="/register" className="text-blue-500 font-semibold">
            Daftar di sini
          </NavLink>
        </p>
      </Card>
    </div>
  );
};

export default Login;
