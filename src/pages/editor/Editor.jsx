import { useMemo, useState } from "react";
import "./Editor.css";
import SideBar from "../../components/editor-components/editor-components/SideBar";
import CodeMirror from "../../components/editor-components/editor-components/CodeMirror";
import Output from "../../components/editor-components/editor-components/Output";
import MainContext from "../../MainContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

function Editor() {
  // State for query and query history
  const [query, setQuery] = useState("SELECT * FROM Customers;");
  const [queryHistory, setQueryHistory] = useState({
    saved: [
      "SELECT * FROM Customers;",
      "SELECT customerID, companyName, country FROM Customers;",
      "SELECT * FROM Customers WHERE country = 'Germany';",
      "SELECT * FROM Customers ORDER BY companyName ASC;",
      "SELECT customerID, companyName FROM Customers ORDER BY city DESC;",
      "SELECT customerID, companyName FROM Customers;",
    ],
    history: ["SELECT * FROM Customers;"],
    outputData: [],
  });

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      query,
      setQuery,
      queryHistory,
      setQueryHistory,
    }),
    [query, queryHistory]
  );

  return (
    <div className="App-Editor">
      <MainContext.Provider value={contextValue}>
        <div className="content">
          <div className="row">
            <div className="col-md-3">
              <SideBar />
            </div>
            <div className="col-md-9 col-12 editor-area">
              <CodeMirror />
              <Output />
            </div>
          </div>
        </div>
      </MainContext.Provider>
    </div>
  );
}

export default Editor;
