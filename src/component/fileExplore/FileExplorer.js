import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FileItem from '../fileItem/FileItem';

const FileExplorer = () => {
  const fileSystem = useSelector(state => state.fileSystem);
  const dispatch = useDispatch();

  const renderFileSystem = (data) => {
    return data.children.map((item) => (
      <FileItem key={item.name} item={item} />
    ));
  };

  return (
    <div className="file-explorer">
        <h3>File Explorer</h3>

      <div className="file-explorer__tree">
        {renderFileSystem(fileSystem)}
      </div>
      <div className="file-explorer__content">
      </div>
    </div>
  );
};

export default FileExplorer;
