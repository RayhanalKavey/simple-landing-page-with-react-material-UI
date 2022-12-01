import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img from "../../../assets/image/L-rayhan-al-kavey.jpeg";
import {
  createTheme,
  IconButton,
  Paper,
  Switch,
  ThemeProvider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";

const HeroCard = () => {
  const [darkMood, setDarkMood] = useState(false);
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#FF0000",
      },
    },
  });
  console.log(darkMood);
  return (
    <ThemeProvider theme={darkMood ? darkTheme : lightTheme}>
      <Switch onClick={() => setDarkMood(!darkMood)}></Switch>
      <Box
        sx={{
          p: 0,
          height: "100vh",
          width: "100vh",
          alignItems: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Card sx={{ maxWidth: 345, p: 2, border: 2, boxShadow: 24 }}>
          <CardMedia
            sx={{ borderRadius: 1, height: 1 }}
            component="img"
            height="140"
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              sx={{ color: "primary.main" }}
              component="div"
            >
              Rayhan Al Kavey
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton sx={{ border: "2px solid black" }}>
              <AddIcon></AddIcon>
            </IconButton>
          </CardActions>
        </Card>
      </Box>
    </ThemeProvider>
  );
};

export default HeroCard;
