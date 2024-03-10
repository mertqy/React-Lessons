import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const data = [
  { id: 0, name: "react", description: "aciklama" },
  { id: 1, name: "vue", description: "aciklama" },
  { id: 2, name: "abxc", description: "aciklama" },
];
const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      {data.map((dt, i) => (
        <div
          onClick={() => navigate(`detail/${dt.id}`)}
          style={{
            border: "1px solid white",
            margin: "15px",
            padding: "5px 10px",
          }}
          key={i}
        >
          <div>{dt.name}</div>
          <div>{dt.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Home;
