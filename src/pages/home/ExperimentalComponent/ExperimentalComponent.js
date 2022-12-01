import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  IconButton,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import avaterImg from "../../../assets/image/L-rayhan-al-kavey.jpeg";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Stack } from "@mui/system";

const ExperimentalComponent = () => {
  const [submitting, setSubmitting] = useState(false);
  const [ratingValue, setRatingValue] = useState(2);
  const isActive = true;

  // console.log(ratingValue);
  useEffect(() => {
    const id = setTimeout(() => {
      setSubmitting(false);
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  }, [submitting]);
  return (
    <div
      style={{
        width: "500px",
        margin: "0 auto",
        backgroundColor: "#F0F8FF	",
        padding: "40px",
        borderRadius: "12px",
        border: "2px solid black",
      }}
    >
      <CssBaseline></CssBaseline>
      <Button
        variant="contained"
        color="secondary"
        fullWidth
        disableRipple={true}
      >
        Contained
      </Button>
      <br />
      <Button
        variant="text"
        sx={{
          border: "2px solid green",
          // m: 2,
          // m: { xs: 3, sm: 6, md: 9 },
          m: [3, 6, 9],
          bgcolor: "secondary.main",
          fontSize: 20,
        }}
      >
        text
      </Button>
      <br />
      <Button variant="outlined">Contained</Button>
      <br />
      <Typography variant="h4" component="h1" gutterBottom noWrap>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
        dicta aliquam id asperiores saepe maxime minima laboriosam quis nulla
        repudiandae?{" "}
      </Typography>
      <LoadingButton
        onClick={() => setSubmitting(true)}
        loading={submitting}
        // loadingIndicator="Loading…"
        variant="outlined"
      >
        Fetch data
      </LoadingButton>
      <br />

      {/* Avater */}
      <Typography
        sx={[
          {
            border: "2px solid green",
            m: 2,

            fontSize: 50,
            textShadow: 2,
            boxShadow: 24,
          },
          isActive && { bgcolor: "yellow" },
        ]}
        variant="h4"
        marginBottom={"14px"}
      >
        Avater
      </Typography>

      <div style={{ display: "flex", gap: "4px" }}>
        <Avatar
          alt="Remy Sharp"
          src={avaterImg}
          sx={{ height: "50px", width: "50px" }}
        />
        <Avatar
          alt="Remy Sharp"
          src={avaterImg}
          sx={{ height: "50px", width: "50px", borderRadius: "12px" }}
        />
      </div>
      <Typography variant="h4">Icon</Typography>
      <AirportShuttleIcon
        sx={{ height: "50px", width: "50px" }}
        color="secondary"
      />

      <IconButton>
        {" "}
        <DeleteIcon
          color="secondary"
          sx={{ height: "50px", width: "50px" }}
        />{" "}
      </IconButton>

      <div>
        <Rating
          name="read-only"
          value={ratingValue}
          onChange={(e, value) => {
            setRatingValue(value);
          }}
        />
      </div>
      <Typography variant="h4">Icon</Typography>
      <br />
      <TextField
        label="username"
        helperText="Error message will be displayed here."
        error={true}
      >
        jknk
      </TextField>
      <br />
      <br />
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        {/* <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item> */}
      </Stack>

      <br />
      <br />
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          bgcolor: "blue",
        }}
      ></Box>
    </div>
  );
};

export default ExperimentalComponent;
