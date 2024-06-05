import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import { BirthdayResponse } from '../types';
import Button from '@mui/material/Button';
import FavouriteList from './FavouriteList';

interface Props {
  date: Date;
  addFavourite: (title: string) => void;
}

const formatDate = (date: Date): string => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${month}/${day}`;
};

const BirthdayList: React.FC<Props> = ({ date, addFavourite }) => {
  const formattedDate = formatDate(date);
  const { data, loading, error } = useFetch(
    `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/births/${formattedDate}`
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const birthdays = (data as BirthdayResponse).births;

  return (
    <div>
      {/* <h3>Birthdays on {formattedDate}</h3> */}
      <ul>
        {birthdays.map((birthday, index) => (
          <li key={index}>
            {birthday.text}
            <Button onClick={() => addFavourite(birthday.pages[0].title)}>Add to Favourites</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BirthdayList;
