
export interface ActivityScores {
  personalData: number | null;
  detectRisk: number | null;
  matchPitfalls: number | null;
  quiz: number | null;
}

export interface AppState {
  currentPage: number;
  scores: ActivityScores;
  completedActivities: {
    [key: string]: boolean;
  };
}

export type Action =
  | { type: 'NEXT_PAGE' }
  | { type: 'PREV_PAGE' }
  | { type: 'SET_PAGE'; payload: number }
  | { type: 'SET_SCORE'; payload: { activity: keyof ActivityScores; score: number } }
  | { type: 'COMPLETE_ACTIVITY'; payload: string };

export interface DraggableItem {
  id: string;
  content: string;
  isPersonal: boolean;
}
