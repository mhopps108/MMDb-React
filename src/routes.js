export const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: "/lists/:slug",
    exact: false,
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: "/movie/:imdbId",
    toolbar: () => <div>Hide</div>,
    sidebar: () => <div>Show?</div>,
    main: () => <h2>All the movie details</h2>
  }
];
