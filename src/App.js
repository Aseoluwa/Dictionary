/** @format */

import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "@mui/material";
import Dic from "./Dic.js";
// import Sec2 from "./Sec2";
import Header from "./Components/Header/Header";
import Definitions from "./Components/Definitions/Definition";

function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("");

  const Dictionary = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      console.log(data);
      setMeanings(data.data);
    } catch (error) {}
  };

  // console.log(meanings);

  useEffect(() => {
    Dictionary();
  }, [word]);

  return (
    <div
      className='App'
      style={{ height: "100vh", backgroundColor: "#90a4ae", color: "black" }}>
      <Container
        maxwidth='md'
        style={{ display: "flex", flexDirection: "Column", height: "100vh" }}>
        <Dic />
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        />
        {meanings && <Definitions word={word} meanings={meanings} />}

        {/* <Sec2 /> */}
      </Container>
    </div>
  );
}

export default App;
