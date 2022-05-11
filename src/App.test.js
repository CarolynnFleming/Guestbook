import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter  } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import App from './App';
import Entries from './views/Users/Entries';

test('should render a list of entries and suppot adding a new entry',
  async () => {
    render(
      <MemoryRouter>
        <UserProvider>
          <App />
          <Entries/>
        </UserProvider>
      </MemoryRouter>
    );
        
    const email = await screen.findByPlaceholderText('Email Address');
    userEvent.type(email, 'some stuff');

    await screen.findByText('Loading Logs...');
  });
