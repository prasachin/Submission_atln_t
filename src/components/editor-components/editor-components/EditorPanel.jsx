import { useContext, useCallback } from "react";
import MainContext from "../../../MainContext";
import toast from "react-hot-toast";

const EditorPanel = ({ onRun }) => {
  
  const { query, setQuery, setQueryHistory } = useContext(MainContext);

  const handleSaveQuery = useCallback(() => {
    if (!query.trim()) {
      toast.error("Cannot save an empty query.");
      return;
    }

    setQueryHistory((prev) => ({
      ...prev,
      saved: [...prev.saved, query],
    }));

    toast.success("Query saved successfully.");
  }, [query, setQueryHistory]);

  const handleClearQuery = useCallback(() => {
    setQuery("");
    toast.success("Editor cleared!");
  }, [setQuery]);

  return (
    <div className="editor-panel">
      <button
        className="btn primary-btn"
        onClick={onRun}
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
