import axios from "axios";
import { useEffect, useState } from "react";

export const Redux = () => {
  const [data, setData] = useState({ hits: [] });
  const [inputValue, setInputValue] = useState("");

  const setDataRedux = async () => {
    const {data} = await axios(
      `https://hn.algolia.com/api/v1/search?query=${inputValue}`
    ); 
    setData(data);
  };

  useEffect(() => {
    setDataRedux();
  }, [inputValue]);
  
  return (
    <>
      <div>Redux: </div>

<input type="text" value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} />

      <ul>
        {data.hits.map((item) => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
};
