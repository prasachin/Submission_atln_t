const executeQuery = (query, data) => {
  try {
    const lowerQuery = query.toLowerCase().trim();
    if (lowerQuery === "select * from customers;") {
      return data;
    } else if (
      lowerQuery.includes("select") &&
      lowerQuery.includes("from customers;") &&
      !lowerQuery.includes("where")
    ) {
      const match = query.match(/select (.+?) from customers/i);
      const columns = match[1].split(",").map((col) => col.trim());

      return data.map((item) =>
        columns.reduce((acc, col) => {
          acc[col] = item[col] || null;
          return acc;
        }, {})
      );
    } else if (lowerQuery.includes("where")) {
      const selectMatch = query.match(/select (.+?) from customers/i);
      const columns = selectMatch[1].split(",").map((col) => col.trim());

      const conditionMatch = query.match(/where (.+);$/i);
      const condition = conditionMatch ? conditionMatch[1] : "";
      const [column, value] = condition
        .split("=")
        .map((part) => part.trim().replace(/['"]/g, ""));

      const filteredData = data.filter((item) => item[column] === value);

      if (columns[0] === "*") {
        return filteredData;
      } else {
        return filteredData.map((item) =>
          columns.reduce((acc, col) => {
            acc[col] = item[col] || null;
            return acc;
          }, {})
        );
      }
    } else if (lowerQuery.includes("order by")) {
      const selectMatch = query.match(/select (.+?) from customers/i);
      const columns = selectMatch[1].split(",").map((col) => col.trim());

      const orderByMatch = query.match(/order by (.+?) (asc|desc);/i);
      const orderByColumn = orderByMatch[1].trim();
      const orderDirection = orderByMatch[2].toLowerCase();

      const sortedData = [...data].sort((a, b) => {
        if (orderDirection === "asc") {
          return a[orderByColumn] > b[orderByColumn] ? 1 : -1;
        } else {
          return a[orderByColumn] < b[orderByColumn] ? 1 : -1;
        }
      });

      if (columns[0] === "*") {
        return sortedData;
      } else {
        return sortedData.map((item) =>
          columns.reduce((acc, col) => {
            acc[col] = item[col] || null;
            return acc;
          }, {})
        );
      }
    } else {
      throw new Error("Unsupported query format");
    }
  } catch (error) {
    console.error("Error parsing query:", error);
    return [];
  }
};

export default executeQuery;
