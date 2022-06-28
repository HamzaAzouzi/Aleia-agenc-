import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";
// ...
const store = configureStore({
  reducer: {
    menu: menuSlice,
    // two: twoSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
