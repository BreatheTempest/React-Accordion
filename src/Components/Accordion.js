import './Accordion.css';

import { useState, useRef } from 'react';

import Chevron from './Chevron';

export default function Accordion(props) {
	const [active, setActive] = useState('');
	const [height, setHeight] = useState('0px');
	const [rotate, setRotate] = useState('');

	const content = useRef(null);

	function toggleAccordion() {
		setActive((prevValue) => (prevValue === '' ? 'active' : ''));
		setHeight(
			active === 'active' ? '0px' : `${content.current.scrollHeight}px`
		);
		setRotate(active === 'active' ? '' : 'rotate');
	}

	return (
		<div className="accordion__section">
			<button className={`accordion ${active}`} onClick={toggleAccordion}>
				<p className="accordion__title">{props.title}</p>
				<Chevron
					width={10}
					fill={'#777'}
					className={`accordion__icon ${rotate}`}
				/>
			</button>
			<div
				ref={content}
				style={{ maxHeight: `${height}` }}
				className="accordion__content"
			>
				<div
					className="accordion__text"
					dangerouslySetInnerHTML={{ __html: props.content }}
				></div>
			</div>
		</div>
	);
}
