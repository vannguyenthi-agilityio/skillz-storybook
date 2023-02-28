import {
  cleanup,
  fireEvent,
  render
} from '@testing-library/react';
import { expect } from '@jest/globals';
import Button from './index';

// Constants
import ASSETS from '@constants/assets';
// Enums
import { SIZES, VARIANTS } from '@enums/button';

describe('Button render', () => {
  afterEach(cleanup);

  it('should render button component', () => {
    const { getByTestId } = render(
      <Button data-testid='TestButton' label='Button' onClick={() => {}} />
    );

    const button = getByTestId('TestButton');
    expect(button).toBeTruthy();
  });

  it('should simulate click and expect mock to call', () => {
    const mock = jest.fn();
    const { getByTestId } = render(
      <Button data-testid='TestButton' label='Button' onClick={mock} />
    );

    const button = getByTestId('TestButton');

    fireEvent.click(button);
    expect(mock).toHaveBeenCalled();
  });

  describe('Button', () => {
    it('will call onClick when enabled', () => {
      const onClick = jest.fn();
      const { getByTestId } = render(
        <Button data-testid='TestButton' label='Button' onClick={onClick} disabled={false}/>
      );
  
      const button = getByTestId('TestButton');
      fireEvent.click(button);
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  
    it('will not call onClick when disabled', () => {
      const onClick = jest.fn();
      const { getByTestId } = render(
        <Button data-testid='TestButton' label='Button' onClick={onClick} isDisabled={true}/>
      );
  
      const button = getByTestId('TestButton');
      fireEvent.click(button);
      expect(onClick).not.toHaveBeenCalled();
    });
  })

  describe('Button', () => {
    it('will call onClick when isLoading is false', () => {
      const onClick = jest.fn();
      const { getByTestId } = render(
        <Button data-testid='TestButton' label='Button' onClick={onClick} isLoading={false}/>
      );
  
      const button = getByTestId('TestButton');
      fireEvent.click(button);
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('will not call onClick when loading', () => {
      const onClick = jest.fn();
      const { getByTestId } = render(
        <Button data-testid='TestButton' label='Loading' onClick={onClick} isLoading={true}/>
      );
  
      const button = getByTestId('TestButton');
      fireEvent.click(button);
      expect(onClick).not.toHaveBeenCalled();
    });
  })

  it('should render with size and className prop', () => {
    const { container } = render(
      <Button size={SIZES.medium} className="chakra-button" label='Button' data-testid='TestButton' />
    );

    const button = container.querySelector('.chakra-button');
    expect(button).toBeTruthy();
  });
});
