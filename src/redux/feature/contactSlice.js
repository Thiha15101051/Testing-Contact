import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
  searchTerm: "",
  favorite: [],
};
export const contactSlice = createSlice({
  name: "contactSlice",
  initialState,
  reducers: {
    addContacts: (state, { payload }) => {
      state.contacts = payload?.map((item) => {
        return { ...item, isFavourite: false };
      });
    },
    setSearchTerm: (state, { payload }) => {
      state.searchTerm = payload;
    },
    setFavorite: (state, { payload }) => {
      payload = { ...payload, isFavourite: true };
      const id = state.contacts.find((item) => item.id === payload.id);
      if (id) {
        state.contacts?.map((item) => {
          if (item.id === payload.id) {
            item.isFavourite = !item.isFavourite;
          } else {
            state.contacts = [...state.contacts];
          }
        });
      }
      state.favorite = [...state.favorite, payload];
    },
    removeFavorite: (state, { payload }) => {
      const id = state.favorite.find((item) => item.id === payload.id);
      if (id) {
        state.favorite = state.favorite.filter(
          (item) => (item.id !== payload.id)
        );
      }
      const cid = state.contacts.find((item) => item.id === payload.id);
      if (cid) {
        state.contacts?.map((item) => {
          if (item.id === payload.id) {
            item.isFavourite = !item.isFavourite;
          } else {
            state.contacts = [...state.contacts];
          }
        });
      }
      return state;
    },
  },
});

export const { addContacts, setSearchTerm, setFavorite, removeFavorite } =
  contactSlice.actions;
export default contactSlice.reducer;
