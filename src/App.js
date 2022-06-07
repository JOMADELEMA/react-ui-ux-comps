import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { useStateContext } from "./contexts/ContextProvider";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const { currentMode } = useStateContext();

  return (
    <>
      <div className="App">
        <div className={currentMode === "Dark" ? "dark" : ""}>
          <BrowserRouter>
            <div className="flex h-screen bg-white dark:bg-main-dark-bg">
              <div className="w-72 fixed dark:bg-main-dark-bg dark:text-gray-200 dark:border-r-1 border-r-1">
                <Sidebar />
              </div>

              <div className="w-full ml-72">
                <Navbar />
                <div>
                  <AppRouter />
                </div>
              </div>
            </div>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
