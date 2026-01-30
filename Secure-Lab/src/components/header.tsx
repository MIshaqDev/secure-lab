import logo from "../assets/Logo.png";

function Header() {
    return (
        <header className="h-15 bg-black flex flex-row gap-150 items-center border-b b-2 border-[var(--primary-color)] lg:flex-row gap-4">
            <div className="flex items-center ml-10">
                <img src={logo} alt="Logo" className="w-12 mt-1 hover:opacity-75" />
                <h1 className="text-[var(--text-color)] ml-4 text-xl font-bold">Secure Lab</h1>

            </div>
            <nav className="ml-30">
                <ul className="flex space-x-6 mr-10 justify-end">
                    <li><a href="/" className="text-[var(--text-color)] hover:text-[var(--primary-color)] hover:underline">Home</a></li>
                    <li><a href="/lab" className="text-[var(--text-color)] hover:text-[var(--primary-color)] hover:underline">Secure Lab</a></li>
                    <li><a href="/about" className="text-[var(--text-color)] hover:text-[var(--primary-color)] hover:underline">About</a></li>
                    <li><a href="/contact" className="text-[var(--text-color)] hover:text-[var(--primary-color)] hover:underline">Contact</a></li>
                </ul>

            </nav>
            <style>
                
            </style>
        </header>
    )

}

export default Header;