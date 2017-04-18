export const LOGGED_IN = 'LOGGED_IN';

export function loggedIn(user) {
    return { type: LOGGED_IN, user };
}