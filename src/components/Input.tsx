import { Field, useField } from "formik";

type Props = {
  name: string;
  label?: string;
};

function Input({
  name,
  label,
  ...inputProps
}: Props & React.ComponentProps<"input">) {
  const field = useField(name);
  const fieldMeta = field[1];

  const errorClasses = "text-danger text-xs font-semibold";
  const inputClasses = ["mt-1"];

  if (fieldMeta.error) {
    inputClasses.push("border-red-500", "focus:outline-none");
  }

  return (
    <div className="mb-5">
      <label htmlFor={name} className="block font-semibold text-sm">
        {label}
      </label>
      {name ? (
        <>
          <Field
            name={name}
            className={inputClasses.join(" ")}
            {...inputProps}
          />
          <p className={errorClasses}>{fieldMeta.error}</p>
        </>
      ) : (
        <input className={inputClasses.join("")} {...inputProps} />
      )}
    </div>
  );
}

export default Input;
