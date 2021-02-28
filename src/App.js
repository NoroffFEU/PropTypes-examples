import Heading from "./components/Heading";
import WithTax from "./components/WithTax";
import Paragraph from "./components/Paragraph";

function App() {
	return (
		<>
			<Heading title="Latest news" />
			<WithTax amount={100} />
			<Paragraph>This is the content</Paragraph>
		</>
	);
}

export default App;
