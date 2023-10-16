import { Route, Routes } from "react-router-dom";
import Home from "../src/routes/Home/home.component";
import Navigation from "../src/routes/Navigation/navigation.component";
import Authentication from './routes/authentication/authentication.component';
import Shop from "./routes/shop/shop.component";
import Test from "./routes/test/test.component";

const App = () => {
 
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Authentication/>}/>
            <Route path="/shop/*" element={<Shop/>}/>
            <Route path="/test" element={<Test/>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
