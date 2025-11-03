
import React, { createContext, useReducer, Dispatch } from 'react';
import { AppState, Action } from '../types';

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
      return { ...state, currentPage: Math.min(state.currentPage + 1, 11) };
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

export const AppContext = createContext<{ state: AppState; dispatch: Dispatch<Action> }>({
  state: initialState,
  dispatch: () => null,
});

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
