import { useParams } from "react-router-dom";

 function Details ()  {
  const { id } = useParams();

  return (
    <div>
      <h2>Car Details</h2>
      <p>Car ID: {id}</p>
    </div>
  );
};

export default Details;
