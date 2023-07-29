import { NavLink } from "react-router-dom";
import { Formik, Form } from "formik";
import Input from "../../components/Input";

function SavingsForm() {
  function handleSubmit() {}

  return (
    <div className="p-5">
      <h3 className="font-bold">Tambah Tabungan</h3>
      <Formik initialValues={{}} onSubmit={handleSubmit}>
        {() => (
          <Form className="mt-5">
            <Input type="date" name="date" label="Tanggal" />
            <Input type="number" name="amount" label="Nominal (Rp)" />
            <button type="submit" className="btn-info">
              Simpan
            </button>
            <NavLink to="/">
              <button className="mt-1 btn-danger">Kembali</button>
            </NavLink>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SavingsForm;
