import { useState } from "react";
import { Input } from "../ui-kit/Input";
import { Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { ProductType } from "../App";

// TODO remove uuid after we have the id's from the backend

interface ProductFormProps {
  addProduct: ({}: ProductType) => void;
}

export const AddProductForm = ({ addProduct }: ProductFormProps) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <form>
      <Input value={inputValue} setInputValue={setInputValue} />
      <Button
        variant="outlined"
        onClick={() => addProduct({ value: inputValue, id: uuidv4() })}
      >
        Dodaj
      </Button>
    </form>
  );
};
