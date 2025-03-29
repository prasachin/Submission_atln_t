import { useContext, useRef, useCallback } from "react";
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
  const { query, setQuery, queryHistory, setQueryHistory } =
    useContext(MainContext);
  const aceEditorRef = useRef(null);

  const handleRunQuery = useCallback(() => {
    const editor = aceEditorRef.current?.editor;
    const selectedText = editor?.getSelectedText().trim();
    const currentLine = editor?.getCursorPosition().row;
    const lineText = editor?.session.getLine(currentLine).trim();

    const queryToRun = selectedText || lineText;

    if (!queryToRun) {
      toast.error("Please enter a query to proceed!", { duration: 2000 });
      return;
    }

    const result = executeQuery(queryToRun, Customers);

    if (result.length) {
      toast.success("Query executed successfully!");
    } else {
      toast.error("No data found or invalid query.");
    }

    setQueryHistory((prev) => ({
      ...prev,
      history: [...prev.history, queryToRun],
      outputData: result,
    }));
  }, [setQueryHistory]);

  const handleChange = useCallback(
    (newQuery) => setQuery(newQuery),
    [setQuery]
  );

  return (
    <div className="editor">
      <div className="editor-container" style={{ flex: 3 }}>
        <EditorPanel onRun={handleRunQuery} />
        <AceEditor
          mode="sql"
          theme="solarized_light"
          name="sql-editor"
          value={query}
          onChange={handleChange}
          editorProps={{ $blockScrolling: true }}
          width="100%"
          height="350px"
          fontSize={20}
          ref={aceEditorRef}
        />
        <p className="note text-2 pt-3 mb-0">
          <strong>NOTE:</strong> Use Saved Query to get Started.
        </p>
      </div>
      <div className="query-history" style={{ flex: 1 }}>
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
