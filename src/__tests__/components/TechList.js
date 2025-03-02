import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import TechList from '../../components/TechList';

describe('TechList component', () => {
  it('should be able to add new tech', function () {
    const { debug, getByText, getByTestId } = render(<TechList />);

    debug();

    fireEvent.click(getByText('Adicionar'));

    debug();

    expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
  });
});
