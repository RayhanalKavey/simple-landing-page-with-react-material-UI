import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, IconButton, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const CreativeCard = ({ image }) => {
  // console.log(image);
  const theme = useTheme();
  return (
    <Card sx={{ maxWidth: 345, minWidth: "345px", p: 2 }}>
      <CardMedia
        component="img"
        height="180"
        image={image}
        alt="green iguana"
        style={{ borderRadius: "10px" }}
      />
      <CardContent
        sx={{
          p: 0,
          pt: 2,
          "&:last-child": {
            pb: 0,
          },
          display: "flex",
          alignItems: "start",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontWeight={600}
            color="primary.green"
          >
            Web Development
          </Typography>
          <Typography variant="body2" color="text.secondary" fontSize={18}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </Box>
        <IconButton
          sx={{
            color: "text.secondary",
            border: `1px solid ${theme.palette.primary.green}`,
            p: 0.2,
            "& svg": { color: "primary.green" },
          }}
        >
          <AddIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default CreativeCard;
