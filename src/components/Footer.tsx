function Footer(){
    return(
        <>
        <footer className="relative z-10 border-t border-purple-400/30 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 REINHART CHRISTOPHER • ALL RIGHTS RESERVED
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-green-400 animate-pulse"></div>
              <span className="text-green-400 text-xs tracking-widest">SYSTEM_ALL_GREEN</span>
            </div>
          </div>
        </div>
      </footer>
        </>
    );
}

export default Footer