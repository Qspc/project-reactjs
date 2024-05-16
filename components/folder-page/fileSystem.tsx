'use client';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { fileSystemPageSchema } from '@/components/folder-page/folderSchema';

export default function FileSystem({ folder, name, child, setChild, isShowing, setIsShowing, route, setRoute, isLastRoute, setIsLastRoute }: fileSystemPageSchema) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (name: string) => {
    setRoute([...route, name]);
    setChild(child - 1);

    const newData: string[] = folder.map((item) => item.name);

    if (child === 0) setIsShowing([...newData, name]);
    else {
      const lastIndex: string[] = isShowing.slice(child);
      setIsShowing([...newData, name].concat(lastIndex));
    }
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isLastRoute === name) {
      setIsOpen(!isOpen);
      setIsLastRoute('');
    }
    if (isLastRoute === 'root') {
      setIsOpen(false);
      setIsLastRoute('');
    }
  }, [isShowing, setIsShowing]);

  return (
    <>
      {isShowing.includes(name) && (
        <>
          {isOpen ? (
            <>
              {!folder.length ? (
                <div className=" absolute w-[80%] mx-auto text-gray-400 text-center "> this folder is empty. </div>
              ) : (
                <>
                  {folder.map((data, index) => (
                    <FileSystem
                      key={`${data.name}-${index}`}
                      folder={data.folders}
                      name={data.name}
                      isShowing={isShowing}
                      setIsShowing={setIsShowing}
                      child={child}
                      setChild={setChild}
                      route={route}
                      setRoute={setRoute}
                      isLastRoute={isLastRoute}
                      setIsLastRoute={setIsLastRoute}
                    />
                  ))}
                </>
              )}
            </>
          ) : (
            <div onClick={() => handleClick(name)} className="flex flex-col gap-1 items-center hover:bg-blue-200 rounded-sm ">
              <FontAwesomeIcon className="text-yellow-300 h-24 " icon={faFolder} />
              {name}
            </div>
          )}
        </>
      )}
    </>
  );
}
