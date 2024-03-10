import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { data } from "./Home";
const Detail = () => {
  const { id } = useParams();
  const [getData, setGetData] = useState('');

    useEffect(() => {
        if (id) {
            setGetData(data.find((dt) => dt.id === id));
        }
    }, [id]);
  console.log(getData);
  return (
    <div>
      <div>{getData?.name}</div>
    </div>
  )
};

export default Detail;
