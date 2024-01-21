import React, { ReactElement, ReactNode } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import * as userEvent from '@testing-library/user-event';

type AllTheProvidersProps = {
  children: ReactNode;
};

const AllTheProviders: React.FC<AllTheProvidersProps> = ({ children }) => {
  return <MemoryRouter>{children}</MemoryRouter>;
};

const renderWithProviders = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
): RenderResult => {
  return render(ui, {
    wrapper: AllTheProviders,
    ...options,
  });
};

export { userEvent, renderWithProviders as render };
