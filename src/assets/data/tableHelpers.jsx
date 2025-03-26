const getTableRowsFromData = (arr) => {
  const keys = Object.keys(arr[0]);
  return arr.map((i) => {
    return (
      <tr key={i.id}>
        {" "}
        {/* Assuming 'id' is a unique key for each row */}
        {keys.map((a) => {
          return <td key={a}>{i[a]}</td>; // Added 'key' to each td for better performance and uniqueness
        })}
      </tr>
    );
  });
};

const getTableHeadFromData = (arr) => {
  const keys = Object.keys(arr[0]);
  return (
    <tr>
      {keys.map((i) => {
        return <th key={i}>{i}</th>; // Use <th> for table header cells
      })}
    </tr>
  );
};

const getTableColumns = (arr) => {
  const keys = Object.keys(arr[0]);
  return keys.map((i) => {
    return (
      <th key={i}>{i}</th> // Render each column name as <th> in the header
    );
  });
};

export { getTableRowsFromData, getTableHeadFromData, getTableColumns };
