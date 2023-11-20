type Props = {
  onToggle: () => void;
};

function Hamburger({ onToggle }: Props) {
  return (
    <div className="flex flex-col gap-1 w-5 cursor-pointer" onClick={onToggle}>
      <div className="w-full border border-white"></div>
      <div className="w-full border border-white"></div>
      <div className="w-full border border-white"></div>
    </div>
  );
}

export default Hamburger;
