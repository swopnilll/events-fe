import AppRoutes from "./routes/AppRoutes";

import GlobalProvider from "./contexts/GlobalProvider";
import { LoaderProvider } from "./contexts/LoaderContext/LoaderProvider";
import { ToasterProvider } from "./contexts/ToasterContext/ToasterProvider";

import Loader from "./components/Loader/loader";
import Toaster from "./components/Toaster/Toaster";

function App() {
  return (
    <LoaderProvider>
      <ToasterProvider>
        <GlobalProvider>
          <Loader />
          <Toaster />
          <AppRoutes />
        </GlobalProvider>
      </ToasterProvider>
    </LoaderProvider>
  );
}

export default App;
