import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const UsarParametros = () => {
  const { id } = useParams(); 

  const navigate = useNavigate();

    useEffect(() => {
    if (id > 100) { 
      navigate('/'); 
    }
  }, [id, navigate])

  return (
    <div>
      <h1>Post {id}</h1>
      <p>Você está vendo o produto post: {id}</p>
    </div>
  );
}

export default UsarParametros;