import { createContext, useContext } from 'react';

const context = createContext<number>(0);

export const ScrollNavProvider = context.Provider;

export const useScrollNavContext = () => useContext(context);
