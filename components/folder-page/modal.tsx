'use client';
import { useState } from 'react';
import { ModalFolderProps } from './folderSchema';

export default function ModalFolder({ folders, setShowModal, route, setFolders, setIsShowing, isShowing }: ModalFolderProps) {
  const [newFolder, setNewFolder] = useState('');

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  const handleCreate = () => {
    let target = folders;
    setShowModal(false);

    //page pertama
    if (!route.length) {
      const newData = [...folders, { name: newFolder, folders: [] }];
      setFolders(newData);
      setIsShowing(newData.map((item) => item.name));
      setNewFolder('');
      return;
    }

    // Loop melalui setiap parameter
    for (let i = 0; i < route.length; i++) {
      const index = target.findIndex((item: any) => item.name === route[i]);

      if (i === route.length - 1) {
        const newShowing = [newFolder, ...isShowing];
        setIsShowing(newShowing);
        target[index].folders.push({ name: newFolder, folders: [] });
      } else {
        target = target[index].folders;
      }
    }

    setNewFolder('');
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={handleBackdropClick}>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex flex-col gap-1 pb-10">
          <label htmlFor="new folder">Folder Name:</label>
          <input className=" border border-gray-200 py-1 px-2 rounded-sm " placeholder="New Folder" type="text" value={newFolder} onChange={(e) => setNewFolder(e.target.value)} />
        </div>
        <div className="flex flex-row-reverse gap-2 text-[16px] ">
          <button onClick={() => setShowModal(false)} className="button-cancel py-2 px-4 ">
            Cancel
          </button>
          <button onClick={() => handleCreate()} className="py-2 px-4 button-primer">
            Add Folder
          </button>
        </div>
      </div>
    </div>
  );
}
