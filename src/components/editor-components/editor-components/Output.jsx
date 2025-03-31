import { useContext, useState } from "react";
import MainContext from "../../../MainContext";
import ColumnDetails from "./ColumnDetails";
import Table from "./Table";
import { saveAs } from "file-saver";
import Papa from "papaparse";
import toast from "react-hot-toast";

const Output = () => {
  const [tab, setTab] = useState(0);
  const { queryHistory } = useContext(MainContext);

  const exportToCSV = () => {
    if (!queryHistory.outputData.length) {
      toast.error("No data available to export.");
      return;
    }

    const csv = Papa.unparse(queryHistory.outputData);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "Output.csv");

    toast.success("The .csv file downloaded successfully.");
  };

  const renderContent = () => {
    return tab === 0 ? (
      <Table result={queryHistory.outputData} />
    ) : (
      <ColumnDetails result={queryHistory.outputData} />
    );
  };

  return (
    <div className="query-results">
      {queryHistory.outputData.length > 0 ? (
        <>
          <div className="tab-bar">
            {["Output", "Table Data"].map((label, index) => (
              <span
                key={index}
                className={`tabs ${
                  tab === index ? "active" : ""
                } cursor-pointer`}
                onClick={() => setTab(index)}
              >
                {label}
              </span>
            ))}
          </div>
          <div className="query-details">
            <p className="text-2">
              Showing <span>{queryHistory.outputData.length}</span> rows in Set{" "}
              <span style={{ fontSize: "0.9rem" }} className="text-1">
                (0.03 sec)
              </span>
            </p>
            <div className="export-btn">
              <button onClick={exportToCSV}>
                Export .csv <span className="fa fa-download"></span>
              </button>
            </div>
          </div>
          {renderContent()}
        </>
      ) : (
        <div className="placeholder-text">
          <span className="fa fa-play"></span>
          <p>Run Something &#38; Your Output Shall Appear!</p>
        </div>
      )}
    </div>
  );
};

export default Output;
