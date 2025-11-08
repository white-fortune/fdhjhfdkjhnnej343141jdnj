import './app.css';
import { LeftPanel } from './components/index.tsx';

function App() {
	return (
		<>
			<div className="main-container h-[100vh] overflow-hidden grid grid-cols-[0.9fr_5fr] bg-[var(--leftpanel-maincontainer-clr)]">
				<LeftPanel />

				<div className="primary-middle-section grid h-[98%] w-[99%] self-end grid-cols-[4fr_1fr] rounded-[50px_0_0_0] bg-[var(--primary-secondary-rightpanel-clr)]">
					<div className="secondary-middle-section w-[90%] h-[100%] flex flex-col items-center justify-self-end">
						<div className="interaction-section w-[80%] h-[30vh] flex flex-col items-center">
							<div className="search-panel w-[100%] h-[30vh]"></div>
							<div className="post-section w-[100%] h-[70vh]"></div>
						</div>
						<div className="feed-section w-[80%] h-[70vh]"></div>
					</div>
					<div className="right-panel bg-[var(--primary-secondary-rightpanel-clr)]"></div>
				</div>
			</div>
		</>
	);
}

export default App;
