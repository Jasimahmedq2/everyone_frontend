import { RouterProvider } from "react-router-dom";
import router from "./routers/route.index";

function App() {
  return (
    <>
      <div className="max-w-[120rem] mx-auto relative border">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
