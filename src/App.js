import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { useStateContext } from "./contexts/ContextProvider";
import {Navbar, Sidebar} from './components';

function App() {
  const { currentMode, collapsedMenu, isClicked } = useStateContext();

  return (
    <>
      <div className="App">
        <div className={currentMode === "Dark" ? "dark" : ""}>
          <BrowserRouter>
            <div className="flex h-screen bg-main-bg dark:bg-main-dark-bg">
              {collapsedMenu ? (
                <div
                  className="w-20 fixed bg-white dark:bg-main-dark-bg dark:text-gray-200"
                  style={{ boxShadow: "1px 0 3px darkgray" }}
                >
                  <Sidebar />
                </div>
              ) : (
                <div
                  className="w-80 fixed bg-white dark:bg-main-dark-bg dark:text-gray-200"
                  style={{ boxShadow: "1px 0 3px darkgray" }}
                >
                  <Sidebar />
                </div>
              )}


              <div className={`w-full h-full ml-20

              

              `}>
                <Navbar />
                <div className="p-5 bg-main dark:bg-main-dark-bg">
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
