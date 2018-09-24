
export interface User {
    name: string;
    accessLevel: AccessLevel;
}

export enum AccessLevel  {
    User,
    Admin,
    SuperAdmin
}