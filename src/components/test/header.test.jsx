import {
  render,
  screen,
  fireEvent
} from '@testing-library/react';
import { ThemeProvider } from '../contexts/themecontext';
import { HeaderPage } from '../header/header';

describe("jest header", () => {

  it('HeaderPage renders correctly', () => {
    render(
      <ThemeProvider>
        <HeaderPage />
      </ThemeProvider>
    );

    const logoPokemon = screen.getByAltText('Logo pokémon');
    expect(logoPokemon).toBeInTheDocument();

    const logoPokedex = screen.getByAltText('Logo Pokédex');
    expect(logoPokedex).toBeInTheDocument();

    const toggleButton = screen.getByTestId('span');
    expect(toggleButton).toBeInTheDocument();

    fireEvent.click(toggleButton);
    expect(document.body).toHaveStyle({ backgroundColor: 'dark' });
    fireEvent.click(toggleButton);
    expect(document.body).toHaveStyle({ backgroundColor: 'light' });
  });

});