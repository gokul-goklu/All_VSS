import { useState } from "react";

const Folder = (structure = { structure }) => {
  console.log(structure);
  const [expand, setExpand] = useState(false);

  if (structure.isFolder) {
    return (
      <div>
        <span onClick={() => setExpand(!expand)}>{structure.name}</span>
        <br />

        <div style={{ display: expand ? "block" : "none" }}>
          {structure.items.map((item) => (
            <Folder structure={item} />
          ))}
        </div>
      </div>
    );
  } else {
    return <span>{structure.name}</span>;
  }
};

export default Folder;
