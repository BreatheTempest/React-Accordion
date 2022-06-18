import Accordion from './Components/Accordion';

export default function App() {
	return (
		<div className="container">
			<Accordion
				title="Whatever you want"
				content="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
			/>
			<Accordion
				title="Whatever you want"
				content="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
			/>
			<Accordion
				title="Whatever you want"
				content="
					<p>
						Lorem ipsum is placeholder text commonly used in the graphic,
						print, and publishing industries for previewing layouts and visual
						mockups.
					</p>
          <br />
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic,
            print, and publishing industries for previewing layouts and visual
            mockups.
          </p>
          <br />
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic,
            print, and publishing industries for previewing layouts and visual
            mockups.
          </p>"
			/>
		</div>
	);
}
