import { createSlice,PayloadAction } from '@reduxjs/toolkit'

export const menuSlice = createSlice({
    name: 'menuState',
    initialState: false,
    reducers: {
      updateStateMenu: (state, action: PayloadAction<boolean>) =>!state,
    },
  })

  export const { updateStateMenu } = menuSlice.actions

export default menuSlice.reducer