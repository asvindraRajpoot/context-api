import { Link } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from './UserContext';

function Article({slug }) {
	let { isLogin } = useContext(UserContext);
	if (!isLogin) {
		throw new Error("Auth Failed");
	}
	return (
		<>
			<Link to="/articles">
				<h4 style={{ marginBottom: "1rem" }}>👈 Go back to articles</h4>
			</Link>
			<h1>
				The slug of the article is::: <b>{slug}</b>!
			</h1>
		</>
	);
}

export default Article;
