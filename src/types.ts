export interface Monster {
  id: number;
  name: string;
  email: string;
}

export type SetSearchField = React.Dispatch<React.SetStateAction<string>>;
