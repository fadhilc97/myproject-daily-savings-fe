type Props = {
  name: string;
  label?: string;
};

function Input({
  name,
  label,
  ...inputProps
}: Props & React.ComponentProps<"input">) {
  return (
    <div className="mb-5">
      <label htmlFor={name} className="block">
        {label}
      </label>
      <input name={name} className="mt-1" {...inputProps} />
    </div>
  );
}

export default Input;
