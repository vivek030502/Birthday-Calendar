// import React from 'react';

// interface Props {
//   favourites: string[];
// }

// const FavouriteList: React.FC<Props> = ({ favourites }) => {
//   return (
//     <div>
//       <h3>Favourite Birthdays</h3>
//       <ul>
//         {favourites.map((favourite, index) => (
//           <li key={index}>{favourite}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FavouriteList;









import React from 'react';

interface Props {
  favourites: string[];
}

const FavouriteList: React.FC<Props> = ({ favourites }) => {
  return (
    <div>
      <ul>
        {favourites.map((favourite, index) => (
          <li key={index}>{favourite}</li>
        ))}
      </ul>
    </div>
  );
};

export default FavouriteList;
