'use client';
import { fileSystemSchema } from '@/components/folder-page/folderSchema';
import FileSystem from '@/components/folder-page/fileSystem';
import { useState } from 'react';
import BreadcumpFolder from '@/components/folder-page/breadcumpFolder';
import getFolder from '@/components/folder-page/getFolder';

export default function FolderPage() {
  const [getFolders, setGetFolders] = useState<fileSystemSchema[]>(getFolder);
  const [isShowing, setIsShowing] = useState<string[]>(getFolders.map((item) => item.name));
  const [child, setChild] = useState<number>(0);
  const [route, setRoute] = useState<string[]>([]); // route data
  const [isLastRoute, setIsLastRoute] = useState<string>('');

  return (
    <div className="my-12 mx-[10%] flex flex-col gap-10 ">
      <BreadcumpFolder route={route} setRoute={setRoute} isShowing={isShowing} setIsShowing={setIsShowing} folders={getFolders} setFolders={setGetFolders} setChild={setChild} setIsLastRoute={setIsLastRoute} />

      <div className="grid grid-cols-4 gap-6">
        {getFolders.map((data, index) => (
          <FileSystem
            key={`${data.name}-${index}`}
            isShowing={isShowing}
            child={child}
            setChild={setChild}
            setIsShowing={setIsShowing}
            folder={data.folders}
            name={data.name}
            route={route}
            setRoute={setRoute}
            isLastRoute={isLastRoute}
            setIsLastRoute={setIsLastRoute}
          />
        ))}
      </div>
    </div>
  );
}
