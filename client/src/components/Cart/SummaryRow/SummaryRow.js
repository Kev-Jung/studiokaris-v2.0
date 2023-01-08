import "./SummaryRow.scss";

const SummaryRow = ({ item, value }) => {
  return (
    <div className="summary-row">
      <span>{item}</span>
      <span>{typeof value === "number" ? `$${value}.00` : value}</span>
    </div>
  );
};

export default SummaryRow;
