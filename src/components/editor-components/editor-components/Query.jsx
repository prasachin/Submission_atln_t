import { useContext, useState, useEffect } from "react";
import MainContext from "../../../MainContext";

const Query = ({ type }) => {
  const { setQuery, queryHistory } = useContext(MainContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredQueries, setFilteredQueries] = useState(
    queryHistory[type] || []
  );

  useEffect(() => {
    setFilteredQueries(
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
      {filteredQueries.length > 0 ? (
        filteredQueries.map((query, index) => (
          <div
            key={index}
            className="cursor-pointer query"
            onClick={() => setQuery(query)}
          >
            <code>{query}</code>
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
