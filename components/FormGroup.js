export default function FormGroup({ type = "text", ...props }) {
  return (
    <div className="form-group my-3 grid">
      <label htmlFor={props.id} className="text-gray-500 mb-3 text-lg">
        {props.label}
      </label>
      <input
        type={type}
        {...props}
        className="focus:outline-none w-full focus:border-primary border-b-2 border-gray-300 py-2"
      />
    </div>
  );
}
