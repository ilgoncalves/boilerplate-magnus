import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { createLogger } from 'redux-logger';
import { sampleReducer } from './reducers/SampleReducer';

const logger = createLogger({
  level: {
    prevState: false,
    nextState: false,
  },
  colors: {
    title: () => 'inherit',
    prevState: () => '#9E9E9E',
    action: () => '#03A9F4',
    nextState: () => '#4CAF50',
    error: () => '#F20404',
  },
});

export const store = configureStore({
  reducer: {
    sample: sampleReducer,
  },
  middleware: defaultMiddleware =>
    defaultMiddleware({ serializableCheck: false }).concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type Selector = <Selected = unknown>(
  selector: (state: RootState) => Selected,
) => Selected;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: Selector = useSelector;
