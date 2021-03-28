import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function Space() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=XimgjaXzZyukF3btI5Txq9EnR0qaROdfi2sUbKI4');

    const items = await data.json();

    console.log(items.near_earth_objects);
    setItems(items.near_earth_objects);
  }

  return (
    <div>
       {items.map(item =>(
         <h1 key={item.id}>
           <a href ={item.nasa_jpl_url} rel="noreferrer" target="_blank">{item.name}</a>
         </h1>
       ))}
    </div>
  );
}

export default Space;