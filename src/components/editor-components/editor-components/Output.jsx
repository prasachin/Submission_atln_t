import { useContext, useState } from "react";
import MainContext from "../../../MainContext";
import ColumnDetails from "./ColumnDetails";
import Table from "./Table";
import { CSVLink } from "react-csv";
import toast from "react-hot-toast";
const Output = () => {
  const [tab, setTab] = useState(0);
  const { queryHistory } = useContext(MainContext);

  const renderContent = () => {
    if (tab === 0) return <Table result={queryHistory.outputData} />;
    return <ColumnDetails result={queryHistory.outputData} />;
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
                (0.03sec)
              </span>
            </p>
            <div className="export-btn">
              <CSVLink
                data={queryHistory.outputData}
                filename={"dataOutput.csv"}
                onClick={() => {
                  toast.success("The .csv file downloaded succusfully.");
                }}
              >
                <button>
                  Export .csv
                  <span className="fa fa-download"></span>
                </button>
              </CSVLink>
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
