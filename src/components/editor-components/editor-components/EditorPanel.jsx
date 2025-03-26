import { useContext } from "react";
import MainContext from "../../../MainContext";
import {
  queryDataAlt as queryData,
  queryData2,
} from "../../../assets/data/data";

const EditorPanel = () => {
  const { query, setQueryHistory, setQuery } = useContext(MainContext);

  const handleRunQuery = () => {
    if (!query.trim()) {
      alert("Query cannot be empty. Please enter a valid SQL query.");
      return;
    }
    if (query === "SELECT * FROM internetData;") {
      setQueryHistory((prev) => ({ ...prev, outputData: queryData }));
    } else if (
      query === "SELECT id, first_name, last_name FROM internetData;"
    ) {
      setQueryHistory((prev) => ({ ...prev, outputData: queryData2 }));
    } else {
      alert("Invalid query. Try a test query.");
    }
    setQueryHistory((prev) => ({
      ...prev,
      history: [...prev.history, query],
    }));
  };

  const handleSaveQuery = () => {
    if (!query.trim()) {
      alert("Cannot save an empty query.");
      return;
    }
    setQueryHistory((prev) => ({
      ...prev,
      saved: [...prev.saved, query],
    }));
  };

  const handleClearQuery = () => {
    setQuery("");
  };

  return (
    <div className="editor-panel">
      <button
        className="btn primary-btn"
        onClick={handleRunQuery}
        style={{ backgroundColor: "green", color: "white", margin: "10px" }}
      >
        <span className="fa fa-play me-1"></span>Run
      </button>
      <button
        className="btn secondary-btn"
        onClick={handleSaveQuery}
        style={{ backgroundColor: "#00254A", color: "white", margin: "10px" }}
      >
        <span className="fa fa-save me-1"></span>Save
      </button>
      <button
        className="btn alert-btn"
        onClick={handleClearQuery}
        style={{ backgroundColor: "red", color: "white", margin: "10px" }}
      >
        <span className="fa fa-times me-1"></span>Clear
      </button>
    </div>
  );
};

export default EditorPanel;
