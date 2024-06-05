import React, { useState } from 'react';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TextField from '@mui/material/TextField';
import './Calendar.css'; // Assuming your CSS file is named Calendar.css

import BirthdayList from './BirthdayList';
import FavouriteList from './FavouriteList';

const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [favourites, setFavourites] = useState<string[]>([]);

  const addFavourite = (title: string) => {
    if (!favourites.includes(title)) {
      setFavourites([...favourites, title]);
    }
  };

  return (
    <div>
      <div className="header">
        <h1>Birthdays Calendar</h1>
      </div>
      <div className="container">
        <div className="calendar-container">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
        <div className="birthdays-container">
          <h2>Birthdays on {selectedDate?.toLocaleDateString()}</h2>
          {selectedDate && <BirthdayList date={selectedDate} addFavourite={addFavourite} />}
        </div>
        <div className="favourites-container">
          <h2>Favourite Birthdays</h2>
          <FavouriteList favourites={favourites} />
        </div>
      </div>
      <div className="footer">
        <p>&copy; 2024 Birthdays Calendar. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Calendar;







