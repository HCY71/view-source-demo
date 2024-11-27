interface InputProps {
  // Add props here
  isRequired?: boolean;
  id: string;
  label: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <div className="flex flex-col">
      <input
        type="text"
        placeholder={props.label + (props.isRequired ? "*" : "")}
        id={props.id}
        name={props.id}
        onChange={props.onChange}
        className="text-desktop-body border-b border-locavore-black bg-transparent py-3 placeholder-locavore-black focus-visible:outline-none"
      />
    </div>
  );
};

export default Input;
