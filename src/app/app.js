import strapi from '@strapi/strapi';

import { useEffect, useState } from 'react';
//
//
// async function getBd() {
//   const entries = await strapi.entityService.findMany('api::part.part', {
//     filters: {
//       price: 0
//     },
//     fields: ['title', 'url'],
//   });
//
//   console.log(entries)
//
// }
// getBd().then(r => console.log(r))
const App = () => {
  const [error, setError] = useState(null);
  // const [restaurants, setRestaurants] = useState([]);
  // const data = getBd().then(value => console.log(value))
  // console.log(data)
  // useEffect(() => {
  //   axios
  //     .get('http://localhost:1337/api/restaurants')
  //     .then(({ data }) => setRestaurants(data))
  //     .catch((error) => setError(error))
  // }, [])

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }

  return (
    <div className="App">
      <ul>
        {/*{restaurants.map(({ id, name }) => <li key={id}>{name}</li>)}*/}
      </ul>
    </div>
  );
};

export default App;




