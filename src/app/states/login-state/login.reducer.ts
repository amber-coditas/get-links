import { createReducer, on } from '@ngrx/store';
import { truestate, falsestate } from './login.actions';

export const initialState = false;

const _loginReducer = createReducer(
  initialState,
  on(truestate, (state) => true),
  on(falsestate, (state) => false)
);

export function loginReducer(state, action) {
  return _loginReducer(state, action);
}