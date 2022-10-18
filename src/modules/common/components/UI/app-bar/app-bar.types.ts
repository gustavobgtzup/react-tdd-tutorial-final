import { ComponentPropsWithoutRef, ReactNode } from 'react';

export type AppBarProps = ComponentPropsWithoutRef<'header'> & {
	children?: ReactNode;
};
