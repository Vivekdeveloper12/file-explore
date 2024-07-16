// src/store/reducers/fileReducer.js
import { ADD_ITEM, DELETE_ITEM, RENAME_ITEM } from '../actions/fileActions';
import { fileSystem } from '../../component/mockData';

const findItem = (path, data) => {
  let current = data;
  for (let i = 0; i < path.length; i++) {
    current = current.children.find(item => item.name === path[i]);
  }
  return current;
};

const fileReducer = (state = fileSystem, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const { path, newItem } = action.payload;
      const parent = findItem(path, state);
      parent.children.push(newItem);
      return { ...state };
    }
    case DELETE_ITEM: {
      const { path } = action.payload;
      const itemName = path.pop();
      const parent = findItem(path, state);
      parent.children = parent.children.filter(item => item.name !== itemName);
      return { ...state };
    }
    case RENAME_ITEM: {
      const { path, newName } = action.payload;
      const item = findItem(path, state);
      item.name = newName;
      return { ...state };
    }
    default:
      return state;
  }
};

export default fileReducer;
