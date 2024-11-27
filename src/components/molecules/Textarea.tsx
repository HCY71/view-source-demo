interface TextAreaProps {
  // Add props here
  isRequired: boolean;
  id: string;
  label: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = (props) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.id} className="text-desktop-body">
        {props.label + (props.isRequired ? "*" : "")}
      </label>
      <textarea
        id={props.id}
        name={props.id}
        rows={4}
        onChange={props.onChange}
        className="text-desktop-body resize-none rounded-md border border-locavore-black bg-transparent px-2 py-1 focus-visible:outline-none"
      />
    </div>
  );
};

export default TextArea;
