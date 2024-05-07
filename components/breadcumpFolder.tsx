import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fileSystemSchema } from '@/types/folderSchema';
import { faFile, faFilter, faFolder } from '@fortawesome/free-solid-svg-icons';
interface RouteFolderPageProps {
  route: string[];
  setRoute: React.Dispatch<React.SetStateAction<string[]>>;
  setIsShowing: React.Dispatch<React.SetStateAction<string[]>>;
  folders: fileSystemSchema[];
  setChild: React.Dispatch<React.SetStateAction<number>>;
  setIsLastRoute: React.Dispatch<React.SetStateAction<string>>;
}
export default function BreadcumpFolder({ route, setRoute, setIsShowing, folders, setChild, setIsLastRoute }: RouteFolderPageProps) {
  const displayRoute = route.length > 2 ? ['...', ...route.slice(route.length - 2)] : route;

  const handleRoot = () => {
    setIsShowing(folders.map((item) => item.name));
    setRoute([]);
    setChild(0);
    setIsLastRoute('root');
  };

  const getNewObject = () => {};

  const handleRoutePage = (name: string, index: number) => {
    if (name === '...' || index == route.length - 1) return;

    let loop = index + 1;
    const routeForLoop = [...route];
    setIsLastRoute(route[route.length - 1]);

    // change for route
    const newRoute = route.slice(0, loop);
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
    // console.log(adminFolders);
    const matchingFolders = adminFolders.map((folder) => folder.name);
    // console.log(matchingFolders);
    setIsShowing(matchingFolders.concat(newRoute));
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

      <button className="py-2 px-4 bg-blue-600 text-white text-[14px] rounded-sm ">+ New Folder</button>
    </div>
  );
}
