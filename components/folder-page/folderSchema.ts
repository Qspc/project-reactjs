export interface fileSystemSchema {
  name: string;
  folders: fileSystemSchema[];
}

export interface filesSchema {
  title: string;
  content: string;
  date: string;
}

export interface ShowMoreSchema {
  status: boolean;
  index: number;
}

export interface fileSystemPageSchema {
  folder: fileSystemSchema[];
  name: string;
  child: number;
  setChild: React.Dispatch<React.SetStateAction<number>>;
  isShowing: string[];
  setIsShowing: React.Dispatch<React.SetStateAction<string[]>>;
  route: string[];
  setRoute: React.Dispatch<React.SetStateAction<string[]>>;
  isLastRoute: string;
  setIsLastRoute: React.Dispatch<React.SetStateAction<string>>;
}

export interface RouteFolderPageProps {
  route: string[];
  setRoute: React.Dispatch<React.SetStateAction<string[]>>;
  isShowing: string[];
  setIsShowing: React.Dispatch<React.SetStateAction<string[]>>;
  folders: fileSystemSchema[];
  setFolders: React.Dispatch<React.SetStateAction<fileSystemSchema[]>>;
  setChild: React.Dispatch<React.SetStateAction<number>>;
  setIsLastRoute: React.Dispatch<React.SetStateAction<string>>;
}

export interface ModalFolderProps {
  folders: fileSystemSchema[];
  route: string[];
  setFolders: React.Dispatch<React.SetStateAction<fileSystemSchema[]>>;
  isShowing: string[];
  setIsShowing: React.Dispatch<React.SetStateAction<string[]>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
