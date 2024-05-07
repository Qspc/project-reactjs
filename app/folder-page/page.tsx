'use client';
import { fileSystemSchema } from '@/types/folderSchema';
import FileSystem from '@/components/fileSystem';
import { useState } from 'react';
import BreadcumpFolder from '@/components/breadcumpFolder';

export default function FolderPage() {
  const getFolders: fileSystemSchema[] = [
    {
      name: 'Fiksi',
      folders: [
        {
          name: 'animasi',
          folders: [
            { name: 'Moana', folders: [] },
            { name: 'Elsa', folders: [] },
            { name: 'Baymax', folders: [] },
            { name: 'Conan Edogawa', folders: [] },
          ],
        },
        {
          name: 'non animasi',
          folders: [
            { name: 'ET', folders: [] },
            { name: 'Jadoo', folders: [] },
          ],
        },
      ],
    },
    {
      name: 'Non Fiksi',
      folders: [
        {
          name: 'aktor',
          folders: [
            { name: 'Leonardo', folders: [] },
            { name: 'Simons', folders: [] },
            { name: 'Jack', folders: [] },
            { name: 'James', folders: [] },
            { name: 'Smith', folders: [] },
          ],
        },
        {
          name: 'aktris',
          folders: [
            { name: 'Rosamund', folders: [] },
            { name: 'Natalie', folders: [] },
            { name: 'Emma', folders: [] },
            { name: 'Lady', folders: [] },
            { name: 'Minnie', folders: [] },
          ],
        },
        {
          name: 'hewan',
          folders: [
            { name: 'Oyen', folders: [] },
            { name: 'Sapi', folders: [] },
          ],
        },
      ],
    },
  ];
  const [isShowing, setIsShowing] = useState<string[]>(getFolders.map((item) => item.name));
  const [child, setChild] = useState<number>(0);
  const [route, setRoute] = useState<string[]>([]); // route data
  const [isLastRoute, setIsLastRoute] = useState<string>('');

  return (
    <div className="my-12 mx-[10%] flex flex-col gap-10 ">
      <BreadcumpFolder route={route} setRoute={setRoute} setIsShowing={setIsShowing} folders={getFolders} setChild={setChild} setIsLastRoute={setIsLastRoute} />
      <div className="grid grid-cols-4 gap-6">
        {getFolders.map((data, index) => (
          <FileSystem
            key={index}
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
