import { getTableHeadFromData, getTableRowsFromData } from "../../../assets/data/tableHelpers";

const Table = ({ result }) => {
  return (
    <div className="query-table">
      {result.length > 0 ? (
        <table>
          <thead>{getTableHeadFromData(result)}</thead>
          <tbody>{getTableRowsFromData(result)}</tbody>
        </table>
      ) : null}
    </div>
  );
};

export default Table;
