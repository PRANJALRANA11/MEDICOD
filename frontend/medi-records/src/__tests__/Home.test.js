// app.test.js
import  React from 'react'
import {render, screen,fireEvent} from '@testing-library/react'
import Navbar from '../Components/Home_components/Navbar'
import Signin from '../Components/Home_components/Signin'
import Signup from '../Components/Home_components/Signup'
import Header from '../Components/Home_components/Header'
import { MemoryRouter } from 'react-router-dom'
describe('Navbar Component', () => {
  it('renders without crashing', () => {
    render(<MemoryRouter><Navbar /></MemoryRouter>);
    expect(screen.getByText('MEDICOD')).toBeInTheDocument();
  });

  it('displays the "Signup" link when not authenticated', () => {
    render(<MemoryRouter><Navbar /></MemoryRouter>);
    expect(screen.getByText('Signup')).toBeInTheDocument();
  });
  it('matches the snapshot', () => {
    const { asFragment } = render(<MemoryRouter><Navbar /></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Signin Component', () => {
  it('renders the form fields and submit button', () => {
    render(<MemoryRouter><Signin /></MemoryRouter>);
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Login/i })).toBeInTheDocument();
  });

  it('calls the submit function with the form data when submitted', async () => {
     render(<MemoryRouter><Signin /></MemoryRouter>);
    fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Password/i), { target: { value: 'password123' } });
    fireEvent.click(screen.getByRole('button', { name: /Login/i }))
  });
  it('matches the snapshot', () => {
    const { asFragment } = render(<MemoryRouter><Signin /></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Signup Component', () => {
  it('renders the form fields and submit button', () => {
    render(<MemoryRouter><Signup /></MemoryRouter>);
    expect(screen.getByPlaceholderText(/Enter Your Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter Your Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Create Password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Sign Up/i })).toBeInTheDocument();
  });

  it('calls the submit function with the form data when submitted', async () => {
    render(<MemoryRouter><Signup /></MemoryRouter>);
      fireEvent.change(screen.getByPlaceholderText(/Enter Your Name/i), { target: { value: 'John Doe' } });
      fireEvent.change(screen.getByPlaceholderText(/Enter Your Email/i), { target: { value: 'test@example.com' }});
      fireEvent.change(screen.getByPlaceholderText(/Create Password/i), { target: { value: 'password123' }});
      fireEvent.click(screen.getByRole('button', { name: /Sign Up/i }));
    });
    it('matches the snapshot', () => {
      const { asFragment } = render(<MemoryRouter><Signup /></MemoryRouter>);
      expect(asFragment()).toMatchSnapshot();
    });
  });

describe('Header Component', () => {
  it('renders the header component', () => {
    render(<MemoryRouter><Header /></MemoryRouter>);

    // Check if the header text is displayed
    expect(screen.getByText('All Your Medical Records At One Place')).toBeInTheDocument();
    expect(screen.getByText('Effortless Medical Record Management Online')).toBeInTheDocument();
    // Check if the "Get Started" link is present
    const getStartedLink = screen.getByText('Get Started');
    expect(getStartedLink).toBeInTheDocument();
    expect(getStartedLink).toHaveAttribute('href', '/Dashboard');

    // Check if the client information icons and text are displayed
    expect(screen.getByText('Over 1000+ clients')).toBeInTheDocument();
    expect(screen.getByText('Verified Trusted')).toBeInTheDocument();
    expect(screen.getByText('Secure & Safe')).toBeInTheDocument();

    // Check if the doctor image is displayed
    const doctorImage = screen.getByAltText('doctor_image');
    expect(doctorImage).toBeInTheDocument();
  });
});
