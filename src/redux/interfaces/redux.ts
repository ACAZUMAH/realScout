import { PayloadAction } from "@reduxjs/toolkit";

interface User {
  $id: string;
  name: string;
  email: string;
  avatar: string;
}

export interface Authentication {
    user?: User | null,
    session?: any,
    isAuthenticated: boolean,
}

export interface AuthenticationActions extends PayloadAction<Partial<Authentication>> {}