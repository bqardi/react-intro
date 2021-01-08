import { useEffect, useState } from "react";

function useDocTitle(title){
  const [docTitle, setDocTitle] = useState("HiFi Corner | " + title);

  useEffect(() => {
    document.title = docTitle;
  }, [docTitle]);

  return [docTitle, setDocTitle];
};

export default useDocTitle;