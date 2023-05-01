import React from "react";

export interface IAddPanel {
    id: number;
    name?: string;
}

export interface IAddPanelFormProps {
    task: IAddPanel;
    onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onSave: () => void;
}
