import clsx from 'clsx';
import { ReactNode } from 'react';

export type Color = 'white' | 'black';

export function Button({
    children,
    color = {
        text: 'black',
        background: 'white',
    },
    style = 'solid',
    type = 'button',
    ...props
}: {
  children: ReactNode;
  color?: { text: Color; background: Color };
  style?: 'solid' | 'outline' ;
  type?: 'submit' | 'button';
}) {
    const getStyle: { solid: string[]; outline: string[];  } = {
        solid: [getColor[color.text], getBackground[color.background]],
        outline: [getColor[color.text], getBackground[color.background]],
       
    };
    return (
        <button
            type={type}
            className={clsx(
                'text-sm px-4 py-2 hover:opacity-70 transition ease-in-out duration-200',
                ...getStyle[style],
            )}
            {...props}
        >
            {children}
        </button>
    );
}

const getColor: { white: string; black: string } = {
    white: 'text-white',
    black: 'text-black',
};
const getBackground: { white: string; black: string; } = {
    white: 'bg-white',
    black: 'bg-black',

};
