import React, { useState } from "react";
import { Container, Box } from "@mui/material";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <Container>
        <Box sx={{ my: 4 }}>
          <h1>GifExpertApp</h1>
          <AddCategory onNewCategory={onAddCategory} />
          {categories.map((category) => (
            <GifGrid key={category} category={category} />
          ))}
        </Box>
      </Container>
    </>
  );
};
