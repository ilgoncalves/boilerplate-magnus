import { createReducer } from '@reduxjs/toolkit';

import { setSample1Action } from '../actions/SampleActions';
import { SampleState } from '../ReduxTypes';

const initialState: SampleState = {
  sample1: '',
  sample2: '',
};

export const sampleReducer = createReducer(initialState, builder => {
  builder.addCase(setSample1Action, (state, action) => {
    state.sample1 = action.payload.sample1;
  });
});
