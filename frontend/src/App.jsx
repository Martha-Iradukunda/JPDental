import AppRouter from "./routes/AppRouter";
import { APITest } from "./components/APITest";

function App() {
  return (
    <>
      <AppRouter />
      <APITest /> {/* This will show API status in bottom-right corner */}
    </>
  );
}

export default App;