import { useContext } from "react";
import MainContext from "../../../MainContext";
import { Customers } from "../../../assets/data/data";
import toast from "react-hot-toast";
import executeQuery from "../../../utils/ExecuteQuery";

const EditorPanel = ({ onRun }) => {
  const { query, setQueryHistory, setQuery } = useContext(MainContext);

  const handleRunQuery = () => {
    if (onRun) {
      onRun();
      return;
    }
  };

  const handleSaveQuery = () => {
    if (!query.trim()) {
      toast.error("Cannot save an empty query.");
      return;
    }
    setQueryHistory((prev) => ({
      ...prev,
      saved: [...prev.saved, query],
    }));
    toast.success("Query Saved Succesfully.");
  };

  const handleClearQuery = () => {
    setQuery("");
    toast.success("Editor Cleared!");
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
