import AppRoutes from "./routes/AppRoutes";
import GlobalProvider from "./contexts/GlobalProvider";

function App() {
  return (
    <GlobalProvider>
      <AppRoutes />
    </GlobalProvider>
  );
}

export default App;
