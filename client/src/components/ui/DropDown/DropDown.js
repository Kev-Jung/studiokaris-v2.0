import "./Dropdown.scss";

const Dropdown = ({
  label,
  options,
  onChange,
  instructions,
  value,
  required,
}) => {
  const dataLabel = label && label.replaceAll(" ", "");

  return (
    <div className="dropdown">
      {/* label */}
      <label className={required ? "required" : ""} htmlFor={dataLabel}>
        {label}
      </label>

      {/* personalization instructions */}
      {instructions && <p className="instructions">{instructions}</p>}

      {/* options exists, then return select otherwise text area */}
      {options ? (
        <select
          name={dataLabel}
          id={dataLabel}
          onChange={onChange}
          defaultValue={value}
        >
          {required && (
            <option value="Select an option">Select an option</option>
          )}
          {options.map((option, i) => (
            <option
              key={i}
              // Saving as JSON because option tag saves its values as a string
              value={JSON.stringify(option?.value) || option}
            >
              {option?.label || option}
            </option>
          ))}
        </select>
      ) : (
        <textarea
          value={value}
          id={dataLabel}
          name={dataLabel}
          maxLength="256"
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default Dropdown;
