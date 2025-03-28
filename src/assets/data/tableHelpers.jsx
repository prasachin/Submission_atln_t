const getTableRowsFromData = (arr) => {
  const keys = Object.keys(arr[0]);
  return arr.map((i) => {
    return (
      <tr key={i.id}>
        {" "}
        {keys.map((a) => {
          return <td key={a}>{i[a]}</td>; 
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
        return <th key={i} style={{backgroundColor:"#00254A"}}>{i}</th>;
      })}
    </tr>
  );
};

const getTableColumns = (arr) => {
  const keys = Object.keys(arr[0]);
  return keys.map((i) => {
    return (
      <th key={i}>{i}</th>
    );
  });
};

export { getTableRowsFromData, getTableHeadFromData, getTableColumns };
