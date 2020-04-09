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

// export const routes = [
//   {
//     path: "/",
//     exact: true,
//     toolbar: () => <Toolbar />,
//     sidebar: () => <Sidebar />,
//     main: () => <Main />
//   },
//   {
//     path: "/lists/:slug",
//     toolbar: () => <Toolbar />,
//     sidebar: (sidebarVisable, toggleSidebar) => (
//       <Sidebar isOpen={sidebarVisable} toggleOpen={toggleSidebar} />
//     ),
//     main: () => <Main />
//   },
//   {
//     path: "/movie/:imdbId",
//     toolbar: () => <div>toolbar</div>,
//     sidebar: () => <div>shoelaces!</div>,
//     main: () => <h2>Shoelaces</h2>
//   }
// ];
