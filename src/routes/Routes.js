import { generatePath } from 'react-router';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  HOME_PAGE: '/home',
  TEAMS: '/teams',
  PLUGINS: '/plugins',
  PRICING: '/pricing',
  SUPPORT: '/support',
  TEAMS_BUILD: '/teams/build',
  TEAMS_INFRA: '/teams/infra',
  TEAMS_RELEASE: '/teams/release',
  HOME_PAGE_APPROVALS: '/home/approvals',
  HOME_PAGE_PIPELINES: '/home/pipelines',
  HOME_PAGE_DEADLINES: '/home/deadlines',
  HOME_PAGE_OVERALL_PERFORMANCE: '/home/overallPerformance',
  NOT_FOUND: '/notFound',
  TOOLS: '/tools',
  USER_MANAGEMENT: '/userManagement',
  CREDENTIAL_MANAGEMENT: '/credentialManagement',
  BUGGY: '/buggy',
  REACT_FLOW: '/reactFlow',
  REACT_FLOW_DEV: '/reactFlow/dev',
  REACT_FLOW_SECURITY: '/reactFlow/security',
  ANY: '/*',
};

/**
 * A helper method to replace parameter placeholders in a string.
 *
 * @example getRoute('/todo/detail/:id', { id: 1 }) will return '/todo/detail/1'
 *
 * @param {string} route The route with optional parameter placeholders, e.g. '/todo/detail/:id'
 * @param {Object} [params] Optional object with key value pairs to replace parameter placeholders from the `route`.
 * @returns {string} resolved route with parameters
 * @throws Will throw a TypeError if provided params and path don’t match
 */
export const getRoute = (route, params) => {
  return generatePath(route, params);
};
