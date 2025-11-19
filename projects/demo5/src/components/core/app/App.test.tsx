import { render } from "@testing-library/react";
import { App } from "./App";
import {Layout} from '@components/core/layout/layout';

vi.mock('@components/core/layout/layout');

describe('App', () => {
  test('renders correctly', () => {
    render(<App />);
    expect(Layout).toHaveBeenCalled()
  });
});
