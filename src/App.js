import { CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/Router/Router";
import { theme1 } from "./Theme/Theme1/Theme1";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme1}>
        <RouterProvider router={router}></RouterProvider>
        <CssBaseline></CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;
