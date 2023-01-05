import { useEffect, useState } from "react";
import "./Dropdown.scss";

const Dropdown = ({
  label,
  options,
  handleChange,
  optionDefaultValue,
  instructions,
  value,
  defaultValue,
}) => {
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

      {/* personalization instructions */}
      {instructions && <p className="instructions">{instructions}</p>}

      {/* options exists, then return select otherwise text area */}
      {options ? (
        <select
          name={dataLabel}
          id={dataLabel}
          onChange={handleChange}
          defaultValue={defaultValue}
        >
          {!optionDefaultValue && (
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
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default Dropdown;
