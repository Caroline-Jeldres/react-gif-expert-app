import { Grid } from "@mui/material";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./index";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      <Grid container direction="row">
        {(isLoading ? Array.from(new Array(12)) : images).map((item, index) => (
          <GifItem item={item} index={index} isLoading={isLoading} />
        ))}
      </Grid>
    </>
  );
};
