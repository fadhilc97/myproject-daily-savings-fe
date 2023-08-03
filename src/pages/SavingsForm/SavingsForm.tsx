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
            <div className="flex gap-1">
              <NavLink to="/" className="w-full">
                <button className="btn-danger">Kembali</button>
              </NavLink>
              <button type="submit" className="btn-info">
                Simpan
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SavingsForm;
