import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes
} from "@mui/material/styles";
import Dashboard from "./components/dashboard/dashboard";

let theme = createTheme({
  palette: {
    background: {
      default: "#ffffff",
      dark: "#000000"
    },
    primary: {
      main: "#ffffff"
    },
    secondary: {
      light: "#60636c",
      main: "#000000",
      dark: "#2f80ed"
    }
  }
});
theme = responsiveFontSizes(theme);
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
