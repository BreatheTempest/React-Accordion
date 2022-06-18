import { useState } from 'react';
import Accordion from './Components/Accordion';
import sortIcon from './Icons/sliders-solid.svg';
import moreIcon from './Icons/add.svg';
import checkMarkIcon from './Icons/check-mark.svg';
import discordLogo from './Icons/discord.png';

export default function App() {
	const [activeItem, setActiveItem] = useState('Latest');

	const sortList = ['Default', 'Featured', 'Latest', 'Following', 'Bookmarks'];
	const list = sortList.map((item, index) => {
		return (
			<p
				key={index}
				onClick={(e) => {
					setActiveItem(e.target.outerText);
				}}
				className={`item ${activeItem === item ? 'active__item' : ''}`}
			>
				<img src={checkMarkIcon} alt="" className="item__icon" />
				{item}
			</p>
		);
	});

	const thingsList = [
		'✍️ Write a Post',
		'🎨 Design a Site',
		'🚀 Ninja Training',
		'👓 Read Tutorials',
		'💵 Build a SAAS',
		'🙋‍♂️ Ask a Question',
		'🍿 Watch Videos',
		'⭐️ Upgrade to Pro',
	];

	const thingsGrid = (
		<div className="grid__container">
			{thingsList.map((thing) => (
				<p className={`thing ${thing === '⭐️ Upgrade to Pro' ? 'pro' : ''}`}>
					{thing}
				</p>
			))}
		</div>
	);

	return (
		<div className="container">
			<Accordion
				title={`Sort Home Feed By ${
					activeItem === 'Default' || activeItem === 'Bookmarks'
						? activeItem
						: activeItem + ' Posts'
				}  `}
				icon={sortIcon}
				jsx={list}
				border="top"
			/>
			<Accordion title="More Things to do" jsx={thingsGrid} icon={moreIcon} />
			<div className="discord__container">
				<img src={discordLogo} alt="" />
				<h3>DevDojo Discord</h3>
				<p>
					Join the DevDojo Community Discord server and connect with other like
					minded developers!
				</p>
			</div>
		</div>
	);
}
