import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";

const theme = createTheme({
  direction: "rtl",
  border: "2px",
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export default function BasicTextFields() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: 340 },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="outlined-number"
              label="مبلغ"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}
