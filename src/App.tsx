import { useState } from 'react';
import './app.css';
import { LeftPanel } from './components/index.tsx';

function App() {
	const [openSidebar, setOpenSidebar] = useState<boolean>(false)

	return (
		<>
			<div className="main-container 
				relative
				bg-[var(--leftpanel-maincontainer-clr)]
				h-[100vh] overflow-hidden 
				grid grid-cols-1
				md:grid-cols-[0.9fr_5fr] 
			">
				<LeftPanel open={openSidebar} />

				<div className="mobile-navigation-panel h-[10vh] w-full md:hidden flex justify-between">
					<div></div>
					<div className="toggle-button bg-emerald-950" onClick={() => setOpenSidebar(!openSidebar)}>
						<button>Toggle Me</button>
					</div>
				</div>


				<div className="primary-middle-section
					bg-[var(--primary-secondary-rightpanel-clr)]
					h-[90vh] 
					grid grid-cols-1 
					w-full 
					md:h-[98%] md:w-[99%] md:self-end md:grid-cols-[4fr_1fr] md:rounded-[50px_0_0_0] 
				">
					<div className="secondary-middle-section
						w-full h-full 
						flex flex-col items-center justify-self-end
						md:w-[90%] 
					">
						<div className="interaction-section w-[80%] h-[30vh] flex flex-col items-center">
							<div className="desktop-navigation-panel hidden md:block md:w-[100%] md:h-[30vh]"></div>
							<div className="post-section w-[100%] h-[70vh]"></div>
						</div>
						<div className="feed-section w-[80%] h-[70vh]"></div>
					</div>
					<div className="right-panel bg-[var(--primary-secondary-rightpanel-clr)] hidden md:block"></div>
				</div>
			</div>
		</>
	);
}

export default App;
