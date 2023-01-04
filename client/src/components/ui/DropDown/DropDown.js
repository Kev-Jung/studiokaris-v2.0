import { useEffect, useState } from "react";
import "./Dropdown.scss";

const Dropdown = ({
  label,
  options,
  handleDropdownChange,
  optionDefaultValue,
  instructions,
  handlePersonalizationMessageChange,
  personalizationMessage,
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

      {/* Personalization Instructions */}
      {instructions && <p className="instructions">{instructions}</p>}

      {/* options exists, then return select input otherwise text input */}
      {options ? (
        <select
          defaultValue={optionDefaultValue && optionDefaultValue}
          name={dataLabel}
          id={dataLabel}
          onChange={(e) => handleDropdownChange(e, dataLabel)}
        >
          {!optionDefaultValue && <option value="">Select an option</option>}
          {options.map((option, i) => (
            <option
              key={i}
              // Saving as JSON because option tag saves its values as a string
              value={JSON.stringify(option.value ? option.value : option)}
            >
              {option.label ? option.label : option}
            </option>
          ))}
        </select>
      ) : (
        <textarea
          value={personalizationMessage}
          name={dataLabel}
          maxLength="256"
          onChange={handlePersonalizationMessageChange}
        />
      )}

      {/* error message, initially hidden */}
      <span className="error-message"></span>
    </div>
  );
};

export default Dropdown;
