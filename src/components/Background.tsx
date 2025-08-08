function Background() {
    return (
        <>
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 opacity-20 animate-pulse"
                    style={{
                        backgroundImage: "linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)",
                        backgroundSize: '50px 50px'
                    }} />
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-900/20" />
            </div>
            <div className="fixed inset-0 pointer-events-none z-40">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse" />
                <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
            </div>
        </>
    );
}

export default Background