/** @format */

import { createTheme, TextField } from "@mui/material";
import React from "react";
import { ThemeProvider } from "styled-components";
import "./Header.css";
import category from "../../data/category";

const Header = ({ setCategory, category, word, setWord }) => {
  const darkTheme = createTheme({
    palette: {
      text: {
        primary: "#fff",

        // secondary: "rgba(0, 0, 0, 0.04)",
      },
      mode: "dark",
    },
  });

  return (
    <div className='header'>
      <span className='title'>{word ? word : ""}</span>
      <div className='input'>
        <ThemeProvider theme={darkTheme}>
          <TextField
            className='search'
            id='filled-basic'
            label='Search a Word'
            variant='filled'
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
