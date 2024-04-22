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

export default function SelectSmall({aa,p1,p2,p3}) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <FormControl required direction="rtl" sx={{ m: 1, minWidth: 340    }} size="small">
          <InputLabel  id="demo-select-small-label"> {aa}</InputLabel>
          <Select 
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={age}
            label={aa}
            onChange={handleChange}
            
          >
            <MenuItem  value="">
              <em>-- انتخاب کنید--</em>
            </MenuItem>
            <MenuItem value={10}>{p1}</MenuItem>
            <MenuItem value={20}>{p2}</MenuItem>
            <MenuItem value={30}>{p3}</MenuItem>
          </Select>
        </FormControl>
      </ThemeProvider>
    </CacheProvider>
  );
}
