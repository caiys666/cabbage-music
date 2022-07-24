import React from "react";
import "./App.css";
import { Button } from "antd";
import styled from "@emotion/styled";

function App() {
  return (
    <div className="App">
      <CabbageButton type="primary">cabbage</CabbageButton>
    </div>
  );
}

const CabbageButton = styled(Button)`
  width: 100%;
`;

export default App;
