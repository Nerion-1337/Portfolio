import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Links_Routes } from "#data/links";
import Error from "#page/error";
import Home from "#page/home";

function App() {

  if (Links_Routes) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path={Links_Routes[0].url} element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    );
  } else {
    return <Error id="1337" error="Error system !" />;
  }
}

export default App;
