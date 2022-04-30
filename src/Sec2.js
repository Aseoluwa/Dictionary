// /** @format */

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// // import CssBaseline from "@mui/material/CssBaseline";
// // import Box from "@mui/material/Box";
// // import Container from "@mui/material/Container";
// // import * as React from "react";

// function Sec2() {
//   const [word, setWord] = useState("");
//   const [meanings, setMeanings] = useState([]);
// //   

//   const Dictionary = async () => {
//     try {
//       const data = await axios.get(
//         "https://api.dictionaryapi.dev/api/v2/entries/en/plane"
//       );
//       console.log(data);
//       setMeanings(data.data);
//     } catch (error) {}
//   };

//   console.log(meanings);

//   useEffect(() => {
//     Dictionary();
//   }, []);

//   return (
//     <div>
//         <h1>part2</h1>
     
//     </div>
//   );
// }

// export default Sec2;
