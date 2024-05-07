import { IconLogo } from "./assets/Icons"

function App() {
  return (
    <header className="relative flex justify-between align-middle text-primary px-2 py-3">
      <IconLogo color="#4F6F52" size={36} />
      <h1 className="font-holdwood text-primary text-2xl absolute top-0 right-1/2 translate-x-1/2 py-3">Books</h1>
      <button className="bg-primary text-secondary px-2 rounded-sm font-poppins">Sign In</button>
    </header>
  )
}

export default App
