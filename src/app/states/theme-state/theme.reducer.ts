import { createReducer, on } from '@ngrx/store';
import { darkstate, lightstate } from './theme.actions';

export const initialState = true;

const _themeReducer = createReducer(
  initialState,
  on(lightstate, (state) => true),
  on(darkstate, (state) => false)
);

export function themeReducer(state, action) {
  return _themeReducer(state, action);
}