interface FileInputProps {
  // Add props here
  isRequired?: boolean;
  id: string;
  label: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
import Body from "../atoms/text/Body";

const FileInput: React.FC<FileInputProps> = (props) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.id} className="text-desktop-body">
        {props.label + (props.isRequired ? "*" : "")}
      </label>
      <div className="relative">
        <div className="flex items-center gap-[0.625rem] rounded-lg border border-dashed border-locavore-black bg-locavore-paperWhite px-5 py-4">
          <svg
            className="w-4"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 4.93066V16.9307H17.5001V4.93066"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.97855 0.82711C9.78329 0.631848 9.46671 0.631848 9.27145 0.82711L6.08947 4.00909C5.8942 4.20435 5.8942 4.52094 6.08947 4.7162C6.28473 4.91146 6.60131 4.91146 6.79657 4.7162L9.625 1.88777L12.4534 4.7162C12.6487 4.91146 12.9653 4.91146 13.1605 4.7162C13.3558 4.52094 13.3558 4.20435 13.1605 4.00909L9.97855 0.82711ZM9.125 13.3057C9.125 13.5818 9.34886 13.8057 9.625 13.8057C9.90114 13.8057 10.125 13.5818 10.125 13.3057L9.125 13.3057ZM9.125 1.18066L9.125 13.3057L10.125 13.3057L10.125 1.18066L9.125 1.18066Z"
              fill="black"
            />
          </svg>
          <Body>Upload a file</Body>
        </div>
        {/* Below is the hidden input */}
        <input
          type="file"
          id={props.id}
          onChange={props.onChange}
          name={props.id}
          className="absolute left-0 top-0 h-full w-full cursor-pointer opacity-0"
        />
      </div>
    </div>
  );
};

export default FileInput;
