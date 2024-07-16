// src/store/actions/fileActions.js
export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const RENAME_ITEM = 'RENAME_ITEM';

export const addItem = (path, newItem) => ({
  type: ADD_ITEM,
  payload: { path, newItem }
});

export const deleteItem = (path) => ({
  type: DELETE_ITEM,
  payload: { path }
});

export const renameItem = (path, newName) => ({
  type: RENAME_ITEM,
  payload: { path, newName }
});
