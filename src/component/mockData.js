export const fileSystem = {
    name: 'root',
    isFolder: true,
    children: [
      {
        name: 'Documents',
        isFolder: true,
        children: [
          { name: 'Resume.pdf', isFolder: false },
          { name: 'CoverLetter.docx', isFolder: false }
        ]
      },
      {
        name: 'Pictures',
        isFolder: true,
        children: [
          { name: 'Vacation', isFolder: true, children: [] },
          { name: 'Family.jpg', isFolder: false }
        ]
      },
      {
        name: 'Dummy',
        isFolder: true,
        children: [
          { name: 'Test 1', isFolder: true, children: [] },
          { name: 'Family.jpg', isFolder: false }
        ]
      }
    ]
  };
  