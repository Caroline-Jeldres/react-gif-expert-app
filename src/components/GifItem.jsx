import { Box, Skeleton, Typography } from "@mui/material";

export const GifItem = ({ item, index }) => (
  <>
    <Box
      className="card"
      key={item?.id ?? index}
      sx={{ width: 210, marginRight: 0.5 }}
    >
      {item ? (
        <img
          style={{ width: 210, height: 118 }}
          alt={item.title}
          src={item.url}
        />
      ) : (
        <Skeleton variant="rectangular" width={210} height={118} />
      )}

      {item ? (
        <Box sx={{ pr: 2 }}>
          <Typography gutterBottom variant="body2">
            {item.title}
          </Typography>
        </Box>
      ) : (
        <Box sx={{ pt: 0.5 }}>
          <Skeleton />
        </Box>
      )}
    </Box>
  </>
);
