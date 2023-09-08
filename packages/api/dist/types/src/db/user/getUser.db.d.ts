declare const getUserFromIdentifier: (identifier: string) => Promise<any>;
declare const getUserFromEmail: (email: string) => Promise<any>;
declare const getUserFromUsername: (username: string) => Promise<any>;
export { getUserFromIdentifier, getUserFromEmail, getUserFromUsername };
