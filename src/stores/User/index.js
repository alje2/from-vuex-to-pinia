import { defineStore } from 'pinia';
import state from './state';

export const useUserStore = defineStore('UserStore', {
  state,
});
