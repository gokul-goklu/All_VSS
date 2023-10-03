import { useEffect, useState } from "react";
import { RiseLoader } from "react-spinners";

export default function SearchFilter2() {
  const [load, setLoad] = useState(true);
  const [search, setSearch] = useState("");
  const [product, setproduct] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => {
        setproduct(result);
        setLoad(false);
      });
  }, []);

  useEffect(() => {
    const filterResult = product.filter((item) => {
      const lSearch = search.toLowerCase();
      const lItem = item.title.toLowerCase();

      return lItem.search(lSearch) !== -1;
    });
    setFiltered(filterResult);
  }, [search, product]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 40,
      }}
    >
      <div>
        <input
          style={{
            marginLeft: 450,
          }}
          type="search"
          id="inputStyle"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 30,
        }}
      >
        {load ? (
          <RiseLoader />
        ) : (
          filtered.map((item) => {
            return (
              <div
                style={{
                  marginLeft: 30,
                  backgroundColor: "greenyellow",
                  padding: 35,
                  overflow: "hidden",
                }}
                key={item.id}
              >
                <img
                  style={{
                    width: 25,
                    height: 25,
                  }}
                  src={item.image}
                />
                <div style={{ fontSize: 15, maxWidth: 100 }}>{item.title}</div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
