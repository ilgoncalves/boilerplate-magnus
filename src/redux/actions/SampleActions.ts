import { createAction } from '@reduxjs/toolkit';
import { AppDispatch } from '../AppStore';
import { withPayloadType } from '../utils';

export const setSample1Action = createAction(
  'SET_SAMPLE_1',
  withPayloadType<{ sample1: string }>(),
);

export const getSampleThunk = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(
      setSample1Action({
        sample1: 'This is a test to see if redux is working',
      }),
    );
  };
};
