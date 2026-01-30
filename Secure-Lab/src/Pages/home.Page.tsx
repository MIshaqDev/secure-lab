import logo from "../assets/Logo.png";

function HomePage() {
    return (
        <div className="flex flex-col items-center bg-[var(--background-color)] w-screen h-screen gap-5 pt-10">
            <img src={logo} alt="" className="w-40 rounded rounded-full hover:opacity-75" />
            <h1 className="text-[var(--text-color)] text-4xl font-bold font-[Space Mono]">Explore the World of Ciphers</h1>
            <p className="text-[var(--text-color)] w-200 text-xl font-justify font-[Space Mono] text-center">Welcome to Secure Lab — your interactive cryptography playground. Experiment with classic ciphers like Caesar, Monoalphabetic, Vigenère, and Row Transposition, or explore our modern custom encryption. Enter your text, choose a key, and see your messages transform in real time. Secure Lab is designed to make learning encryption intuitive, hands-on, and fun, whether you’re a student, developer, or just curious about the world of secure communication. Dive in, encrypt your secrets, and discover the art of cryptography!</p>
            <button className="border font-bold text-xl b-2 border-[var(--primary-color)] text-[var(--text-color)] px-4 py-2 rounded-full hover:border-[var(--primary-color)] hover:text-[var(--card-background)] hover:rounded-full hover:bg-[var(--text-color)]">Get Started</button>
        </div>
    )
}
export default HomePage;