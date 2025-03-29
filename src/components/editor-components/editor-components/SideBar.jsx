import { useContext } from "react";
import MainContext from "../../../MainContext";
import Query from "./Query";

const SideBar = () => {
  const { queryHistory } = useContext(MainContext);

  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <h5>
          <span className="fa fa-cloud secondary me-2"></span>
          <span className="text-1">Available Queries</span>
        </h5>
        {queryHistory && <Query type="saved" />}
      </div>
      <p className="note text-2 pt-6 mb-0">
        <strong>NOTE:</strong> Use Above Query to directly inject in the Editor
        to get results.
      </p>
    </div>
  );
};

export default SideBar;
