import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { useStateContext } from "./contexts/ContextProvider";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const { currentMode, collapsedMenu } = useStateContext();

  return (
    <>
      <div className="App">
        <div className={currentMode === "Dark" ? "dark" : ""}>
          <BrowserRouter>
            <div className="flex h-screen">
              {collapsedMenu ? (
                <div
                  className="w-20 fixed bg-white dark:bg-main-dark-bg dark:text-gray-200"
                  style={{ boxShadow: "2px 0 2px gray" }}
                >
                  <Sidebar />
                </div>
              ) : (
                <div
                  className="w-80 fixed bg-white dark:bg-main-dark-bg dark:text-gray-200"
                  style={{ boxShadow: "2px 0 2px gray" }}
                >
                  <Sidebar />
                </div>
              )}


              <div className={`w-full h-full ${collapsedMenu? "ml-20" : "ml-80"}`}>
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
