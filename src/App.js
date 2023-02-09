import React from "react";
import { GlobalState } from "./contexts/GlobalState";
import Router from "./Router/Router";

export default function App() {
  return (
    <GlobalState>
      <Router/>
    </GlobalState>
  );
}
