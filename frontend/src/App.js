import React, { useEffect, useState } from "react";

function App() {

  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://simple-backfront-2.onrender.com/api/message")
      .then(res => res.text())
      .then(data => setMessage(data));
  }, []);

  return (
    <div style={{textAlign:"center", marginTop:"100px"}}>
      <h1>React + Spring Boot</h1>
      <h2>{message}</h2>
    </div>
  );

}

export default App;