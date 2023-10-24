import { TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface InputProps {
  value: string;
  setInputValue: Dispatch<SetStateAction<string>>;
}

export const Input = ({ value, setInputValue }: InputProps) => {
  return (
    <TextField
      type="text"
      value={value}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};
