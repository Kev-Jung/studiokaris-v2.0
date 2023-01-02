import "./DropDown.scss";

const DropDown = ({
  label,
  options,
  handleDropdownChange,
  optionDefaultValue,
  instructions,
}) => {
  console.log(optionDefaultValue);

  const dataLabel = label.replaceAll(" ", "");

  return (
    <div className="dropdown">
      {/* label */}
      <label
        className={!optionDefaultValue ? "required" : ""}
        htmlFor={dataLabel}
      >
        {label}
      </label>

      {/* Personaliztion Instructions */}
      {instructions && <p className="instructions">{instructions}</p>}

      {/* options exists, then return select input otherwise text input */}
      {options ? (
        <select
          defaultValue={optionDefaultValue ? optionDefaultValue : ""}
          name={dataLabel}
          id={dataLabel}
          onChange={(e) => handleDropdownChange(e, dataLabel)}
        >
          {!optionDefaultValue && <option value="">Select an option</option>}
          {options.map((option, i) => (
            <option key={i} value={option.value ? option.value : option}>
              {option.label ? option.label : option}
            </option>
          ))}
        </select>
      ) : (
        <textarea
          maxLength="256"
          onChange={(e) => handleDropdownChange(e, dataLabel)}
        />
      )}

      {/* error message, initially hidden */}
      <span className="error-message"></span>
    </div>
  );
};

export default DropDown;
