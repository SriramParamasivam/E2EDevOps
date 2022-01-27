import { getRoute, ROUTES } from './Routes';

describe('Routes.js Test Suite', () => {
  test('should return URL when passed correct key', () => {
    const output = getRoute(ROUTES.HOME);

    expect(output).toEqual('/');
  });
});
