import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';


function Item() {
  useEffect(() => {}, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {

  }

  return (
    <div>
       <h2>Item</h2>
    </div>
  );
}

export default Item;