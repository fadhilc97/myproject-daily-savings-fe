import { Field, ErrorMessage } from "formik";

type Props = {
  name: string;
  label?: string;
};

function Input({
  name,
  label,
  ...inputProps
}: Props & React.ComponentProps<"input">) {
  const errorClasses = "text-danger text-xs font-semibold";

  return (
    <div className="mb-5">
      <label htmlFor={name} className="block font-semibold text-sm">
        {label}
      </label>
      {name ? (
        <>
          <Field name={name} className="mt-1" {...inputProps} />
          <ErrorMessage name={name} component="p" className={errorClasses} />
        </>
      ) : (
        <input className="mt-1" {...inputProps} />
      )}
    </div>
  );
}

export default Input;
