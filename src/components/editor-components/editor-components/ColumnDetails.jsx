import { Customers as queryData } from "../../../assets/data/data";
import { getTableColumns } from "../../../assets/data/tableHelpers";

const ColumnDetails = () => (
  <div className="column-details">
    <table>{getTableColumns(queryData)}</table>
  </div>
);

export default ColumnDetails;
