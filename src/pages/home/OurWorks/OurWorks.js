import { Box, Grid, IconButton } from "@mui/material";
import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import CreativeCard from "./CreativeCard";
import { cardInformations } from "./cardInformation";

const OurWorks = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (
    event = "React.SyntheticEvent",
    newValue = "number"
  ) => {
    // console.log(newValue);
    setValue(newValue);
  };
  return (
    <Box>
      {/* Heading section */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "left",
        }}
      >
        <Box
          sx={{
            pt: "40px",
          }}
        >
          <SectionTitle
            title="Here some of our works"
            colored="Works"
            sx={{ textAlign: "left", mb: 0 }}
          ></SectionTitle>
        </Box>
        <Box sx={{ display: "flex", space: 2, alignItems: "center" }}>
          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              sx={{
                "& .MuiTabs-indicator": {
                  display: "none",
                  color: "primary.green",
                },
                "& .Mui-selected": {
                  color: "primary.main",
                  fontWeight: "bold",
                },
                "& .MuiButtonBase-root": {
                  textTransform: "capitalize",
                },
              }}
              centered
            >
              <Tab label="All" />
              <Tab label="Web Design" />
              <Tab label="Web Development" />
            </Tabs>
          </Box>

          <Box>
            <IconButton
              sx={{ border: "1px solid black", mr: 2 }}
              onClick={() => setValue(value - 1)}
              disabled={value === 0}
            >
              <KeyboardArrowLeftIcon></KeyboardArrowLeftIcon>
            </IconButton>
            <IconButton
              sx={{ transform: "rotate(180deg)", border: "1px solid black" }}
              onClick={() => setValue(value + 1)}
              disabled={value === 2}
            >
              <KeyboardArrowLeftIcon></KeyboardArrowLeftIcon>
            </IconButton>
          </Box>
        </Box>
      </Box>
      {/* Card section */}
      <Grid container sx={{ justifyContent: "center" }} spacing={4}>
        {cardInformations[value].map((image, i) => (
          <Grid key={i} item xs={12} lg={4} md={6}>
            <CreativeCard image={image} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurWorks;
