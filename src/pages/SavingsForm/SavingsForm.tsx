import { NavLink } from "react-router-dom";
import moment from "moment";
import { Formik, Form } from "formik";
import { ISavingsSchema, savingsSchema } from "../../@schemas/savings-schema";
import useCreateSavings from "../../hooks/savings/useCreateSavings";
import Input from "../../components/Input";
import Button from "../../components/Button";

function SavingsForm() {
  const { mutate: createSavings } = useCreateSavings();

  function handleSubmit(values: ISavingsSchema) {
    createSavings(values);
  }

  return (
    <div className="p-5">
      <h3 className="font-bold">Tambah Tabungan</h3>
      <Formik
        initialValues={{ date: moment().format("YYYY-MM-DD"), amount: 0 }}
        onSubmit={handleSubmit}
        validationSchema={savingsSchema}
      >
        {() => (
          <Form className="mt-5">
            <Input type="date" name="date" label="Tanggal" />
            <Input type="number" name="amount" label="Nominal (Rp)" />
            <div className="flex gap-1">
              <NavLink to="/" className="w-full">
                <Button type="button" variant="danger">
                  Kembali
                </Button>
              </NavLink>
              <Button type="submit" variant="success">
                Simpan
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SavingsForm;
