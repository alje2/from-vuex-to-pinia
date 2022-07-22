import { defineStore } from 'pinia';

import actions from './actions';
import state from './state';

export const useEventStore = defineStore('EventStore', {
  state,
  actions,
});
