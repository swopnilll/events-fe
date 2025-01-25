import AppRoutes from "./routes/AppRoutes";
import GlobalProvider from "./contexts/GlobalProvider";
import Toaster from "./components/Toaster/Toaster";

function App() {
  return (
    <GlobalProvider>
      <Toaster />
      <AppRoutes />
    </GlobalProvider>
  );
}

export default App;
