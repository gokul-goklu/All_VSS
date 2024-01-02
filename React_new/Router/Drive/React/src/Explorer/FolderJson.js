const structure = {
  name: "root",
  isFolder: true,
  items: [
    {
      name: "Public",
      isFolder: true,
      items: [
        {
          name: "public-nested",
          isFolder: false,
        },
        {
          name: "public-nested-2",
          isFolder: false,
        },
      ],
    },
    {
      name: "src",
      isFolder: true,
      items: [
        {
          name: "index.html",
          isFolder: false,
        },
        {
          name: "app.js",
          isFolder: false,
        },
      ],
    },
  ],
};
export default structure;
