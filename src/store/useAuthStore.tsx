import { create } from 'zustand';
import { AuthStoreType } from '../types/WTNK.types';

export const useAuthStore = create<AuthStoreType>(function (set) {
  return {
    hasToken: false,
    signInFn: function () {
      set({
        hasToken: true
      });
    },
    signOutFn: function () {
      localStorage.removeItem('accessToken');
      set({
        hasToken: false
      });
    }
  };
});
