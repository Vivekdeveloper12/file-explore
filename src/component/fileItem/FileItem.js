// src/components/FileItem/FileItem.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem, renameItem, addItem } from '../../store/actions/fileActions';
import { generatePath } from '../../utils/pathUtils';
import './FileItem.css';

const FileItem = ({ item, parentPath = [] }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(item.name);
  const dispatch = useDispatch();
  const currentPath = generatePath(item, parentPath.slice());

  const handleDelete = () => {
    dispatch(deleteItem(currentPath));
  };

  const handleRename = () => {
    dispatch(renameItem(currentPath, newName));
  };

  const handleAddItem = (isFolder) => {
    const newItem = { name: 'New Item', isFolder, children: isFolder ? [] : undefined };
    dispatch(addItem(currentPath, newItem));
  };

  return (
    <div className="file-item">
      <div style={{cursor:"pointer"}} onClick={() => item.isFolder && setIsExpanded(!isExpanded)}>
        {item.isFolder ? '📁' : '📄'} 
        {isEditing ? (
          <input 
            value={newName} 
            onChange={(e) => setNewName(e.target.value)} 
            onBlur={() => { handleRename(); setIsEditing(false); }} 
            autoFocus
          />
        ) : (
          <span onDoubleClick={() => setIsEditing(true)}>{item.name}</span>
        )}
      </div>
      {isExpanded && item.children && (
        <div className="file-item__children">
          {item.children.map(child => (
            <FileItem key={child.name} item={child} parentPath={currentPath} />
          ))}
        </div>
      )}
      <div className="file-item__actions">
        <button onClick={handleDelete}>Delete</button>
        <button onClick={() => setIsEditing(true)}>Rename</button>
        <button onClick={() => handleAddItem(true)}>New Folder</button>
        <button onClick={() => handleAddItem(false)}>New File</button>
      </div>
    </div>
  );
};

export default FileItem;
