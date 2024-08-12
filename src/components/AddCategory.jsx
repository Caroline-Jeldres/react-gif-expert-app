import React, { useState } from "react";
import {
  TextField,
  Button,
  Stack,
} from "@mui/material";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (value) => {
    setInputValue(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newValue = inputValue.trim();
    if (newValue <= 1) return;
    onNewCategory(newValue);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={4}
      >
        <TextField
          style={{ width: "100%" }}
          id="outlined-basic"
          variant="outlined"
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder="Buscar GiF..."
        />
        <Button variant="contained" type="submit">
          Agregar
        </Button>
      </Stack>
    </form>
  );
};
