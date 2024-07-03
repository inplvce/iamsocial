import React from 'react';

export type ButtonType = {
    name: string;
    onClick: () => void;
    label: string;
}

export const Button: React.FC<ButtonType> = (props) => {
    return (
        <button name={props.name} onClick={props.onClick}>
            {props.label} {/* Отображение текста кнопки */}
        </button>
    );
};