import { create } from 'zustand';
import { AuthStoreType } from '../types/WTNK.types';

export const useAuthStore = create<AuthStoreType>(function (set) {
  const tokenExists = !!localStorage.getItem('accessToken');
  return {
    hasToken: tokenExists,
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
