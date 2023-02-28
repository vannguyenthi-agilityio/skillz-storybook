import {
  cleanup,
  fireEvent,
  render
} from '@testing-library/react';
import { Image } from '@chakra-ui/react'
import * as renderer from 'react-test-renderer'
import { expect } from '@jest/globals';
import Button from './index';

// Constants
import { ASSETS } from '@constants/index';

// Enums
import { SIZES, VARIANTS, ICON_POSITION } from '@enums/index';

describe('Button render', () => {
  afterEach(cleanup);

  it('should render button component with icon right', () => {
    const { getByTestId } = render(
      <Button data-testid='TestButton' label='Button' onClick={() => {}} positionIcon={ICON_POSITION.right}
      icon={<Image src={ASSETS.ICON_CHARITY} alt='Icon Charity'/>} />
    );

    const button = getByTestId('TestButton');
    expect(button).toBeTruthy();
  });

  describe('should create Button', () => {
    it('renders the Button content text', () => {
      const rendered = render(
        <Button label="Primary" />
      );
      const { container } = rendered;
  
      expect(container.textContent).toEqual('Primary');
    });
  });

  describe("jest Snapshot testing", () => {
    it("matches Button Snapshot", () => {
      const button = renderer.create(<Button label='Primary' positionIcon={ICON_POSITION.left}
      icon={<Image src={ASSETS.ICON_CHARITY} alt='Icon Charity'/>} />).toJSON();
      expect(button).toMatchSnapshot();
    });
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
        <Button data-testid='TestButton' label='Button' onClick={onClick} isDisabled={false}/>
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

  it('should render with size, variant and className props', () => {
    const { getByTestId } = render(
      <Button data-testid='TestButton' size={SIZES.md} variant={VARIANTS.uppercase} className="custom-button" label='Button' />
    );

    const button = getByTestId('TestButton');
    expect(button).toBeTruthy();
  });
});
