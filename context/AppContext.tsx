
import React, { createContext, useReducer, Dispatch, useEffect } from 'react';
import { AppState, Action } from '../types';
import { TOTAL_PAGES } from '../constants';

const initialState: AppState = {
  currentPage: 1,
  scores: {
    personalData: null,
    detectRisk: null,
    matchPitfalls: null,
    quiz: null,
  },
  completedActivities: {},
};

const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'NEXT_PAGE':
      return { ...state, currentPage: Math.min(state.currentPage + 1, TOTAL_PAGES) };
    case 'PREV_PAGE':
      return { ...state, currentPage: Math.max(state.currentPage - 1, 1) };
    case 'SET_PAGE':
        return { ...state, currentPage: action.payload };
    case 'SET_SCORE':
      return {
        ...state,
        scores: { ...state.scores, [action.payload.activity]: action.payload.score },
      };
    case 'COMPLETE_ACTIVITY':
        return {
            ...state,
            completedActivities: { ...state.completedActivities, [action.payload]: true }
        }
    default:
      return state;
  }
};

const initializer = (initialValue = initialState) => {
    try {
        const item = window.localStorage.getItem('appState');
        if (item) {
            const parsedState = JSON.parse(item);
            // Basic validation and merge to prevent crashes from old state structures
            if (typeof parsedState.currentPage === 'number') {
                return { ...initialValue, ...parsedState };
            }
        }
    } catch (error) {
        console.error("Error reading state from localStorage", error);
    }
    return initialValue;
};


export const AppContext = createContext<{ state: AppState; dispatch: Dispatch<Action> }>({
  state: initialState,
  dispatch: () => null,
});

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState, initializer);

  useEffect(() => {
    try {
        window.localStorage.setItem('appState', JSON.stringify(state));
    } catch (error) {
        console.error("Error saving state to localStorage", error);
    }
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
