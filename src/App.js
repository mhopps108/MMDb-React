import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Header, Sidebar, Toolbar, Main } from "./components";
import styled, { css } from "styled-components";
import { device } from "./devices";
import "boxicons";
// use createGlobalStyle from styled-components

export const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: "/lists/:slug",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: "/movie/:imdbId",
    toolbar: () => <div>toolbar</div>,
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  }
];

export default function App() {
  const [sidebarVisable, setSidebarVisable] = useState(false);
  const toggleSidebar = () => setSidebarVisable(!sidebarVisable);
  return (
    <StyledApp>
      <Header toggleSidebar={toggleSidebar} />
      <Toolbar />
      <Sidebar isOpen={sidebarVisable} toggleOpen={toggleSidebar} />
      <Main />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif; */
  font-family: "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* font-family: sans-serif; */
  max-width: 1000px;
  display: grid;
  grid-template-areas:
    "header"
    "toolbar"
    "main";
  grid-template-columns: 1fr;
  grid-template-rows: 55px 45px 1fr;
  margin: 0 auto;

  @media ${device.min.desktop} {
    display: grid;
    grid-template-areas:
      "header header"
      "sidebar toolbar"
      "sidebar main";
    grid-template-columns: 200px 1fr;
    grid-template-rows: 55px 45px 1fr;
  }
`;
