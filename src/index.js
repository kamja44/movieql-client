import React from "react";
import ReactDOM from "react-dom/client";
import client from "./client";
import { ApolloProvider } from "@apollo/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Provider => 애플리케이션 안의 모두가 client에 할당된 client에 접근할 수 있게 한다.
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
