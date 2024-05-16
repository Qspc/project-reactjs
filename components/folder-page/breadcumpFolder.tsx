import { useState } from 'react';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fileSystemSchema } from '@/components/folder-page/folderSchema';
import { RouteFolderPageProps } from '@/components/folder-page/folderSchema';
import ModalFolder from './modal';

export default function BreadcumpFolder({ route, setRoute, isShowing, setIsShowing, folders, setChild, setIsLastRoute, setFolders }: RouteFolderPageProps) {
  const [showModal, setShowModal] = useState(false);
  const displayRoute = route.length > 2 ? ['...', ...route.slice(route.length - 2)] : route;

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

  return (
    <div className="flex py-2 px-4 rounded-sm align-middle items-center justify-between text-primary text-[18px] bg-gray-100 ">
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
      <button onClick={() => setShowModal(true)} className="button-primer text-[14px] py-2 px-4">
        + New Folder
      </button>
      {/* modal */}
      {showModal && <ModalFolder folders={folders} route={route} setFolders={setFolders} isShowing={isShowing} setIsShowing={setIsShowing} setShowModal={setShowModal} />}
    </div>
  );
}
