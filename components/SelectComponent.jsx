import React from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
//import iranyekan from '../public/fonts/Yekan.woff';

const theme = createTheme({
  direction: "rtl",
  border:'2px'
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export default function SelectSmall({aa}) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <FormControl required direction="rtl" sx={{ m: 1, minWidth: 300    }} size="small">
          <InputLabel  id="demo-select-small-label"> {aa}</InputLabel>
          <Select 
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={age}
            label="حساب مبدا"
            onChange={handleChange}
            
          >
            <MenuItem  value="">
              <em>-- انتخاب کنید--</em>
            </MenuItem>
            <MenuItem value={10}>طرح جامع</MenuItem>
            <MenuItem value={20}>اکرام</MenuItem>
            <MenuItem value={30}>فجر</MenuItem>
          </Select>
        </FormControl>
      </ThemeProvider>
    </CacheProvider>
  );
}
