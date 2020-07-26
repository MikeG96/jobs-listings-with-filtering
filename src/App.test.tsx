import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App componente', () => {
  it('Create app component', () => {
    const app = render(<App />);
    expect(app).toBeTruthy()
  });
})


