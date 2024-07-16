/** @format */
import styles from './pillBtn.module.css'
import { MouseEventHandler, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
	children: ReactNode;

	className?: string;
	to?: string;

	onClick?: MouseEventHandler<HTMLButtonElement>;

	type?: 'button' | 'submit' | 'reset';
}

export const PillBtn = ({ children, className, to, onClick, type }: Props) => {
	const extendedClassName = `${styles.pillBtn}  ${className || ''}`;

	return to ? (
		<Link
			className={extendedClassName}
			to={to}
			role='button'>
			{children}
		</Link>
	) : (
		<button
			className={extendedClassName}
			onClick={onClick}
			type={type}>
			{children}
		</button>
	);
};

