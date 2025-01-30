import { AppRouter } from "./routes/AppRouter";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <AppRouter />
      </main>
      <Footer />
    </>
  );
}

export default App;
