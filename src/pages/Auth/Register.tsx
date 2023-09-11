import { Form, Formik } from "formik";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { NavLink } from "react-router-dom";
import { registerSchema } from "../../@schemas/register-schema";
import useRegister from "../../hooks/auth/useRegister";

const Register = () => {
  const { mutate: handleRegister } = useRegister();

  return (
    <div className="p-5">
      <Card>
        <h3 className="font-bold text-center">Register</h3>
        <Formik
          initialValues={registerSchema.getDefault()}
          onSubmit={handleRegister}
          validationSchema={registerSchema}
        >
          {() => (
            <Form className="mt-5">
              <Input
                type="text"
                label="Nama Lengkap"
                name="fullName"
                autoComplete="off"
              />
              <Input
                type="email"
                label="E-mail"
                name="email"
                autoComplete="off"
              />
              <Input type="password" label="Kata Sandi" name="password" />
              <Input
                type="password"
                label="Ulangi Kata Sandi"
                name="password2"
              />
              <Button type="submit" variant="success">
                Daftar
              </Button>
            </Form>
          )}
        </Formik>
        <p className="text-center mt-4">
          Sudah punya akun ?{" "}
          <NavLink to="/login" className="text-blue-500 font-semibold">
            Masuk di sini
          </NavLink>
        </p>
      </Card>
    </div>
  );
};

export default Register;
