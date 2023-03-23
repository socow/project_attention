import { useCallback, useState } from "react";

export default function useInput() {
  const [value, setValue] = useState<string>("");

  const onChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  }, []);

  return { value, onChange };
}
