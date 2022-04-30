/** @format */

import React from "react";
import "./Dic.css";
import { useEffect, useState } from "react";
import { Container, createTheme, TextField } from "@mui/material";
import { ThemeProvider } from "styled-components";

const Dic = ({ word, setWord }) => {
  const [data, setdata] = useState([]);

  const get_data = async () => {
    const res = await fetch("https://random-words-api.vercel.app/word");
    const data = await res.json();
    // console.log(data[0].definition);
    // console.log(data[0].word);
    setdata(data[0]);
    setdata(data[0]);
  };

  useEffect(() => {
    get_data();
  }, []);

  function zz(e) {
    console.log(e.target.value);
  }

  return (
    <div className='section1'>
      <Container maxWidth='sm'>
        <div className='Theeng' key={data.id}>
          <h1 className='Theeng'>The English Dictionary.COM </h1>
          <h2>{data.word}</h2>
          <p> Meaning:{data.definition}</p>
        </div>
      </Container>
    </div>
  );
};

export default Dic;
