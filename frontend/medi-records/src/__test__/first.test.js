import{render,screen}from '@testing-library/react'
import App from '../App'

test('should pass', () => {
  render(<App />)
  const linkElement = screen.getByText(/MEDICOD/i);
    expect(linkElement).toBeInTheDocument();
})
