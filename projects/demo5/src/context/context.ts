import type { NotesState } from "@/components/notes/services/state";
import { createContext } from "react";

export type AppContextType = {
    appTitle: string;
    notesState: NotesState
}


export const AppContext = createContext<AppContextType>({} as AppContextType);
