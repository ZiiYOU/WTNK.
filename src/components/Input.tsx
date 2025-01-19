interface InputProps {
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
}

const Input = ({ placeholder, onChange, name, value }: InputProps) => {
  return (
    <input
      type="text"
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="px-4 h-10 rounded-md border border-gray-300/10 bg-gray-200/20 outline-none"
    />
  );
};

export default Input;
