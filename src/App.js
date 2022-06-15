import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { useStateContext } from "./contexts/ContextProvider";
import { Navbar, Sidebar } from "./components";

function App() {
  const { currentMode, isClicked, collapsedSidebar, hiddenSidebar } =
    useStateContext();

  return (
    <>
      <div className="App">
        <div className={currentMode === "Dark" ? "dark" : ""}>
          <BrowserRouter>
            <div className="flex h-screen bg-main-bg dark:bg-main-dark-bg">
              {hiddenSidebar ? (
                <>
                  <div
                    className="w-0 fixed bg-white dark:bg-main-dark-bg dark:text-gray-200"
                    style={{ boxShadow: "1px 0 3px darkgray" }}
                  ></div>

                  <div className={`w-full h-full ml-0`}>
                    <Navbar />
                    <div className="p-5 bg-main dark:bg-main-dark-bg">
                      <AppRouter />
                    </div>
                  </div>
                </>
              ) : collapsedSidebar ? (
                <>
                  <div
                    className="w-20 fixed bg-white dark:bg-main-dark-bg dark:text-gray-200"
                    style={{ boxShadow: "1px 0 3px darkgray" }}
                  >
                    <Sidebar />
                  </div>

                  <div className={`w-full h-full ml-0`}>
                    <Navbar />
                    <div className=" bg-main-bg dark:bg-main-dark-bg ml-20">
                      <AppRouter />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="w-80 fixed bg-white dark:bg-main-dark-bg dark:text-gray-200"
                    style={{ boxShadow: "1px 0 3px darkgray" }}
                  >
                    <Sidebar />
                  </div>

                  <div className={`w-full h-full ml-0`}>
                    <Navbar />
                    <div className="bg-main dark:bg-main-dark-bg ml-20">
                      <AppRouter />
                    </div>
                  </div>
                </>
              )}
            </div>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
