import menu from "../assets/icons/menu.svg"
import close from "../assets/icons/close.svg"

interface INavigation {
    menuOpen: boolean;
    onClickMenu: () => void;
    onClickSection: (sectionId: string) => void;
    activeSection: string;
}

function Navigation({ menuOpen, onClickMenu, onClickSection, activeSection }: INavigation) {
    return (
        <>
            {/* Mobile Navigation */}
            <button
                onClick={() => onClickMenu()}
                className="fixed top-6 right-6 z-50 lg:hidden w-12 h-12 bg-gray-900 border border-purple-400 flex items-center justify-center"
                style={{ clipPath: 'polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)' }}
            >
                {menuOpen ? <img src={close} className="w-6 h-6 text-purple-400" /> : <img src={menu} className="w-6 h-6 text-purple-400" />}
            </button>

            <nav className={`fixed top-0 left-0 w-full h-full bg-black/95 backdrop-blur-md z-50 transform transition-transform duration-300 lg:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
                    {['HOME', 'ABOUT', 'PROJECTS', 'EXPERIENCE', 'CONTACT'].map((item, _) => (
                        <button
                            key={item}
                            onClick={() => onClickSection(item.toLowerCase())}
                            className="text-white hover:text-purple-400 transition-colors duration-300 tracking-wider"
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </nav>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex fixed top-8 left-1/2 transform -translate-x-1/2 z-50 bg-gray-900/80 backdrop-blur-md border border-purple-400/30 translate-x-[calc(-50%+0.5px)]"
                style={{ clipPath: 'polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)' }}>
                <div className="flex px-8 py-4 space-x-8">
                    {['HOME', 'ABOUT', 'PROJECTS', 'EXPERIENCE', 'CONTACT'].map((item) => (
                        <button
                            key={item}
                            onClick={() => onClickSection(item.toLowerCase())}
                            className={`px-4 py-2 transition-all duration-300 tracking-wider text-sm ${activeSection === item.toLowerCase()
                                    ? 'text-purple-400 bg-purple-400/10'
                                    : 'text-gray-300 hover:text-purple-400'
                                }`}
                            style={{
                                clipPath: activeSection === item.toLowerCase() ? 'polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)' : 'none'
                            }}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </nav>
        </>
    );
}

export default Navigation