import { Box, Typography } from "@mui/material";
import React from "react";

const SectionTitle = ({ title, colored }) => {
  return (
    <Box sx={{ fontWeight: "bold", textAlign: "center", mb: 8 }}>
      {colored && (
        <Typography
          sx={{
            color: "primary.green",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          {colored}{" "}
        </Typography>
      )}
      <Typography
        sx={{
          fontSize: "34px",
          fontWeight: "bold",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default SectionTitle;
