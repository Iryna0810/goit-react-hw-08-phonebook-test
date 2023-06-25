import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer'
import storage from 'redux-persist/lib/storage'
import {
  persistStore, persistReducer,
FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}
 
const persistedReducer = persistReducer(persistConfig, reducer)

// export const store = configureStore({
//   persistedReducer,
// });

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor  = persistStore(store)

