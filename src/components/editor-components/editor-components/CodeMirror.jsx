import  { useContext } from "react";
import MainContext from "../../../MainContext";
import AceEditor from "react-ace";

import "brace/mode/sql";
import "brace/theme/solarized_light";
import EditorPanel from "./EditorPanel";

const Editor = () => {
  const { query, setQuery } = useContext(MainContext);

  const handleChange = (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <div className="editor">
      <div className="row">
        <div className="editor-container col-12 col-md-8 col-lg-9 col-xl-10">
          <AceEditor
            mode="sql" 
            theme="light_grey" 
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
        <div className="editor-panel-container col-md-4 col-lg-3 col-xl-2">
          <EditorPanel />
        </div>
      </div>
    </div>
  );
};

export default Editor;
