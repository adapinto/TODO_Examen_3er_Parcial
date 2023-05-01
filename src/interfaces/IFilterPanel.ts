
export interface IFilterPanelProps {
    teams: string[];
    onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  }