type Props = {
  children: React.ReactNode;
};

const Card = ({ children }: Props) => {
  return <div className="p-4 shadow-lg rounded-md w-full">{children}</div>;
};

export default Card;
