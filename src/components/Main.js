import React from "react";
import styled, { css } from "styled-components/macro";
import { device } from "../devices";

const StyledMain = styled.div`
  background-color: lightgray;
  grid-area: main;
  height: calc(100vh - 100px);
  overflow: scroll;
`;

const MovieListItem = styled.div`
  /* min-width: 333px; */
  /* max-width: 400px; */
  height: 150px;
  border-radius: 5px;
  background: white;
`;

const MovieListLayout = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(333px, 1fr));
  justify-content: center;
  padding: 10px;
`;

export default function Main() {
  return (
    // <BrowserRouter>
    //     <Switch>
    //       <Route path={"/lists/:listSlug"}>
    //         <List />
    //       </Route>
    //       <Route path="/lists">
    //         <Lists />
    //       </Route>
    //       <Route path="/movie/:imdbId">
    //         <MovieDetail />
    //       </Route>
    //       <Route path="/search">
    //         <Search />
    //       </Route>
    //       <Route path="/release-dates">
    //         <ReleaseDates />
    //       </Route>
    //       <Route path="/">
    //         <Home />
    //       </Route>
    //     </Switch>
    //   </BrowserRouter>
    <StyledMain>
      <MovieListLayout>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => {
          return <MovieListItem key={item} />;
        })}
      </MovieListLayout>
    </StyledMain>
  );
}
