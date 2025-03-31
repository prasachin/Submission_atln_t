import { useEffect } from "react";

const Github = () => {
  useEffect(() => {
    window.location.href = "https://github.com/prasachin/Submission_atln_t";
  }, []);

  return (
    <div>
      <h2>Github</h2>
    </div>
  );
};

export default Github;
