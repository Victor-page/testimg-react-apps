import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Greeting from './Greeting';

describe('<Greeting/>', () => {
  test('renders Hello World as a text', () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ...nothing

    // Assert
    const helloWorldElement = screen.getByText('Hello World!');
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders It's good to see u as a text if the button was not clicked", () => {
    render(<Greeting />);
    const outputElement = screen.getByText("It's good to see u", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test('renders Changed if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText('Changed', {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test("hides It's good to see u text when the button is clicked", () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    const outputElement = screen.queryByText("It's good to see u", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
