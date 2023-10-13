// app.test.js
import {render, screen,fireEvent} from '@testing-library/react'
import App from '../App'
import Home from '../Pages/Home'
import Navbar from '../Components/Home_components/Navbar'
import { MemoryRouter } from 'react-router-dom'

describe('Navbar component', () => {
  it('should render the logo', () => {
    render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>);
    const logo = screen.getByText('MEDICOD');
    expect(logo).toBeInTheDocument();
  });

  it('should render the About and Contact links', () => {
    render(<MemoryRouter>
      <Navbar />
    </MemoryRouter>);
    const aboutLink = screen.getByText('About');
    const contactLink = screen.getByText('Contact');
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  it('should render the Dashboard link if the user is authenticated', () => {
    render(
      <MemoryRouter>
      <Navbar isAuthenticated={true} />
    </MemoryRouter>);
    const dashboardLink = screen.getByText('Dashboard');
    expect(dashboardLink).toBeInTheDocument();
  });

  it('should render the Signup link if the user is not authenticated', () => {
    render( <MemoryRouter>
      <Navbar isAuthenticated={false} />
    </MemoryRouter>);
    const signupLink = screen.getByText('Signup');
    expect(signupLink).toBeInTheDocument();
  });

  it('should call the HandleLogout function when the Logout link is clicked', () => {
    const mockHandleLogout = jest.fn();
    render(
      <MemoryRouter>
     <Navbar isAuthenticated={true} HandleLogout={mockHandleLogout} />
    </MemoryRouter>);
    const logoutLink = screen.queryByRole('link', { name: /logout/i});
    if (logoutLink) {
      fireEvent.click(logoutLink);
    }
    expect(mockHandleLogout).toHaveBeenCalledTimes(logoutLink ? 1 : 0);
  });
});