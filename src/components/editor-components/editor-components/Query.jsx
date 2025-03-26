import { useContext, useEffect, useState } from "react";
import MainContext from "../../../MainContext";

const Query = ({ type }) => {
  const { setQuery, queryHistory } = useContext(MainContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [list, setList] = useState(queryHistory[type]);

  useEffect(() => {
    setList(queryHistory[type]);
  }, [type, queryHistory]);

  useEffect(() => {
    setList(
      queryHistory[type].filter((query) =>
        query.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, type, queryHistory]);

  return (
    <div className="query-wrapper">
      <div className="search-bar">
        <input
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {list.length > 0 ? (
        list.map((query, index) => (
          <div key={index} className="cursor-pointer query">
            <code onClick={() => setQuery(query)}>{query}</code>
          </div>
        ))
      ) : (
        <div className="placeholder-text">
          <span className="fa fa-exclamation-circle"></span>
          <p>No queries found.</p>
        </div>
      )}
    </div>
  );
};

export default Query;
