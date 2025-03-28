import { useContext } from "react";
import MainContext from "../../../MainContext";
import AceEditor from "react-ace";
import Query from "./Query";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/theme-solarized_light";

import EditorPanel from "./EditorPanel";

const Editor = () => {
  const { query, setQuery } = useContext(MainContext);
  const { queryHistory } = useContext(MainContext);
  const handleChange = (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <div
      className="editor"
    >
      <div className="editor-container" style={{ flex: "3" }}>
        <div className="editor-panel-container">
          <EditorPanel />
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
        />
        <p className="note text-2 pt-3 mb-0">
          <strong>NOTE:</strong> Click on a previously saved query to start.
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
