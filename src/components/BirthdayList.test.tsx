import { render, screen } from '@testing-library/react';
import BirthdayList from './BirthdayList';

jest.mock('../hooks/useFetch', () => ({
  __esModule: true,
  default: () => ({
    data: {
      births: [
        { text: 'Sample Birthday 1', pages: [{ title: 'Sample 1' }] },
        { text: 'Sample Birthday 2', pages: [{ title: 'Sample 2' }] },
      ],
    },
    loading: false,
    error: null,
  }),
}));

test('renders birthdays', () => {
  const date = new Date();
  render(<BirthdayList date={date} addFavourite={function (title: string): void {
    throw new Error('Function not implemented.');
  } } />);
  expect(screen.getByText(/Sample Birthday 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Sample Birthday 2/i)).toBeInTheDocument();
});
