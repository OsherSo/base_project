import PropTypes from "prop-types";

const FormRow = ({ type, name, labelText, defaultValue, onChange }) => {
  return (
    <div>
      <label htmlFor={name}>{labelText || name}</label>
      <input
        type={type}
        id={name}
        name={name}
        defaultValue={defaultValue || ""}
        onChange={onChange}
        required
      />
    </div>
  );
};

FormRow.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
};

export default FormRow;
