import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fileSystemSchema } from '@/components/folder-page/folderSchema';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { RouteFolderPageProps } from '@/components/folder-page/folderSchema';

export default function BreadcumpFolder({ route, setRoute, isShowing, setIsShowing, folders, setChild, setIsLastRoute, setFolders }: RouteFolderPageProps) {
  const displayRoute = route.length > 2 ? ['...', ...route.slice(route.length - 2)] : route;
  const [showModal, setShowModal] = useState(false);
  const [newFolder, setNewFolder] = useState('');

  const handleRoot = () => {
    setIsShowing(folders.map((item) => item.name));
    setRoute([]);
    setChild(0);
    setIsLastRoute('root');
  };

  const handleRoutePage = (name: string, index: number) => {
    if (name === '...' || index == route.length - 1) return;

    let loop = route.length - 1;
    const routeForLoop = [...route];
    setIsLastRoute(route[route.length - 1]);

    // change for route
    const newRoute = route.slice(0, -1);
    setRoute([...newRoute]);

    // change for child
    setChild(loop * -1);

    // change for data
    let adminFolders: fileSystemSchema[] = [];
    let arrayLoop: fileSystemSchema[] = folders;
    for (let i = 0; i < loop; i++) {
      const foundItem = arrayLoop.find((item) => item.name === routeForLoop[i]);
      if (foundItem) {
        const foldersOfItem = foundItem.folders;
        if (foldersOfItem) {
          adminFolders = foldersOfItem;
          arrayLoop = adminFolders;
        }
      }
    }
    const matchingFolders = adminFolders.map((folder) => folder.name);
    setIsShowing(matchingFolders.concat(newRoute));
  };

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
      const index = target.findIndex((item) => item.name === route[i]);

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
    <div className="flex py-2 px-4 rounded-sm align-middle items-center justify-between text-primary text-[18px] bg-gray-100 ">
      {/* route */}
      <div className="flex items-center align-middle">
        <button onClick={handleRoot} className="pr-[26px]">
          <FontAwesomeIcon className="text-greyTwo" icon={faFolder} />
        </button>
        {displayRoute.map((data, index) => (
          <button key={index} onClick={() => handleRoutePage(data, index)}>
            &gt; &emsp; {data} &emsp;
          </button>
        ))}
      </div>
      <button onClick={() => setShowModal(true)} className="bg-blue-500 hover:bg-blue-700 text-[14px] text-white  py-2 px-4 rounded hover:shadow-lg ease-in-out duration-300">
        + New Folder
      </button>
      {/* modal */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={handleBackdropClick}>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex flex-col gap-1 pb-10">
              <label htmlFor="new folder">Folder Name:</label>
              <input className=" border border-gray-200 py-1 px-2 rounded-sm " placeholder="New Folder" type="text" value={newFolder} onChange={(e) => setNewFolder(e.target.value)} />
            </div>
            <div className="flex flex-row-reverse gap-2 text-[16px] ">
              <button onClick={() => setShowModal(false)} className="bg-red-500 hover:bg-red-700 text-white  py-2 px-4 rounded hover:shadow-lg ease-in-out duration-300">
                Cancel
              </button>
              <button onClick={() => handleCreate()} className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded hover:shadow-lg ease-in-out duration-300">
                Add Folder
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
