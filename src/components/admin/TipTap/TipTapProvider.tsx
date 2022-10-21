import { Editor } from '@tiptap/react';
import { createContext, useContext } from 'react';

const TipTabContext = createContext<Editor>({} as Editor);

export const TipTabProvider = TipTabContext.Provider;

export const useEditorContext = () => useContext(TipTabContext);
