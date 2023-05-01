import '@testing-library/jest-dom';

jest.mock('react-router-dom', () => ({
  Link: ({ children, ...props }) => {
    return (
      <button type='button' data-testid={props['data-testid']}>
        {children}
      </button>
    );
  }
}));