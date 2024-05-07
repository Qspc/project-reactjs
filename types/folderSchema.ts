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
