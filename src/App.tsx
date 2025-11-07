import './app.css';
import { LeftPanel } from './components/index.tsx';

function App() {
	return (
		<>
			<div className="main-container">
				<LeftPanel />

				<div className="primary-middle-section">
					<div className="secondary-middle-section">
						<div className="interaction-section">
							<div className="search-panel"></div>
							<div className="post-section"></div>
						</div>
						<div className="feed-section"></div>
					</div>
					<div className="right-panel"></div>
				</div>
			</div>
		</>
	);
}

export default App;
