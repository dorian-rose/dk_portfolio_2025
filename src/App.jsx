import { AppRouter } from "./routes/AppRouter";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <AppRouter />
      </main>
    </>
  );
}

export default App;
