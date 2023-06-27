import { createSelector } from "@reduxjs/toolkit";

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserName = state => state.auth.user.name;
export const selectFilter = state => state.filter.value.toLowerCase();
export const selectContacts = state => state.contacts.contacts;  
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectToken = state => state.auth.token;

export const selectVisibleContacts = createSelector(
    [selectContacts, selectFilter], 
    (contacts, filter) => {
        return contacts.filter(contact => contact.name
            .toLowerCase().includes(filter))
    }
)

