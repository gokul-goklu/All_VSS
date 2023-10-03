import { useEffect, useMemo, useState } from "react";
import { ClimbingBoxLoader } from "react-spinners";
const SearchFiltermemo = () => {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  //const [filtered, setFilter] = useState("");
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => {
        setProduct(result);
        //setFilter(result);
        setLoad(false);
      });
  }, []);

  const filtering = useMemo(() => {
    const filterresult = product.filter((item) => {
      const csearch = search.toLowerCase().trim();
      const citem = item.title.toLowerCase().trim();
      return citem.search(csearch) != -1;
    });
    return filterresult;
  }, [search, product]);
  return (
    <div>
      <div>
        <input type="search" onChange={(e) => setSearch(e.target.value)} />
      </div>

      <div>
        {load ? (
          <ClimbingBoxLoader />
        ) : (
          filtering.map((item) => {
            return (
              <div key={item.id}>
                <h3> {item.id}</h3>
                <img src={item.image} />
                <h3>{item.title}</h3>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SearchFiltermemo;
