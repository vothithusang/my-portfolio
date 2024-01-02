import { ConfigProvider } from "antd";
import Routes from "./routes";
import React from "react";

function App() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Progress: {
            lineBorderRadius: 2,
          },
        },
      }}
    >
      <Routes />
    </ConfigProvider>
  );
}

export default App;
