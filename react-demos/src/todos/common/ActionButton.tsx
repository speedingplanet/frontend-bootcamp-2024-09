import React from 'react';
import classnames from 'classnames';

type ActionButtonProps = {
	text?: string;
	handleClick: () => void;
} & React.ComponentPropsWithoutRef<'button'>;

function ActionButton({ children, text, handleClick, ...props }: ActionButtonProps) {
	return (
		<div>
			<button
				className={classnames('btn btn-small btn-really-small', props.className)}
				onClick={handleClick}
			>
				{children || text}
			</button>
		</div>
	);
}

export default ActionButton;
