
export interface User {
    name: string;
    email: string;
    accessLevel: AccessLevel;
}

export interface UserFieldsToLogin {
    email: string;
    password: string;
}

export interface UserFromBack {
    
    token: string;
    data: {
        id: number;
        name: string,
        password: string,
        email: string,
        accessLevel: AccessLevel
    }
      
}

export enum AccessLevel  {
    User,
    Admin,
    SuperAdmin
}