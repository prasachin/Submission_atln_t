import { useContext, useRef } from "react";
import MainContext from "../../../MainContext";
import AceEditor from "react-ace";
import Query from "./Query";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/theme-solarized_light";
import executeQuery from "../../../utils/ExecuteQuery";
import EditorPanel from "./EditorPanel";
import { Customers } from "../../../assets/data/data";
import toast from "react-hot-toast";

const Editor = () => {
  const { query, setQuery, setQueryHistory } = useContext(MainContext);
  const { queryHistory } = useContext(MainContext);
  const aceEditorRef = useRef(null);
  const handleRunQuery = () => {
    const editor = aceEditorRef.current.editor;

    const selectedText = editor.getSelectedText();

    const currentLine = editor.getCursorPosition().row;
    const lineText = editor.session.getLine(currentLine);

    const queryToRun = selectedText.trim() || lineText.trim();

    if (!queryToRun.trim()) {
      toast.loading("Please enter a query to proceed!", { duration: 2000 });
      return;
    }

    const result = executeQuery(queryToRun, Customers);

    if (result.length > 0) {
      setQueryHistory((prev) => ({ ...prev, outputData: result }));
      toast.success("Query executed successfully!");
    } else {
      toast.error("No data found or invalid query.");
    }

    // Update query history
    setQueryHistory((prev) => ({
      ...prev,
      history: [...prev.history, queryToRun],
      outputData: result,
    }));

    
  };

  const handleChange = (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <div className="editor">
      <div className="editor-container" style={{ flex: "3" }}>
        <div className="editor-panel-container">
          {/* Pass handleRunQuery to EditorPanel */}
          <EditorPanel onRun={handleRunQuery} />
        </div>
        <AceEditor
          mode="sql"
          name="sql-editor"
          value={query}
          onChange={handleChange}
          editorProps={{ $blockScrolling: true }}
          className="code-mirror-wrapper"
          width="100%"
          height="350px"
          fontSize={20}
          theme="solarized_light"
          ref={aceEditorRef} // Attach the ref
        />
        <p className="note text-2 pt-3 mb-0">
          <strong>NOTE:</strong> Use Saved Query to get Started.
        </p>
      </div>
      <div className="query-history" style={{ flex: "1" }}>
        <h5>
          <span className="fa fa-undo secondary me-2"></span>
          <span className="text-1">History</span>
        </h5>
        {queryHistory && <Query type="history" />}
      </div>
    </div>
  );
};

export default Editor;
