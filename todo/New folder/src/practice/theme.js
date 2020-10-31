import React, { useState } from "react";
export default function Theme() {
  const [theme, setTheme] = useState("white");
  return (
    <div style={{ backgroundColor: theme }}>
      <button onClick={() => setTheme("red")}>red</button>
      <button onClick={() => setTheme("green")}>green</button>
      <button onClick={() => setTheme("blue")}>blue</button>
    </div>
  );
}
