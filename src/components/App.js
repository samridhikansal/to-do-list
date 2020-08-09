import React, { useState } from "react";
import Card from "./Card";

function App() {
  const mainheading = "Welcome to React Learning";
  const subheading = " Start Smart ...Start Small";
  return (
    <div>
      <Card mainheading={mainheading} subheading={subheading} />
    </div>
  );
}

export default App;
