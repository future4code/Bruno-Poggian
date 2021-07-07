import { BrowserRouter,Switch,Route} from "react-router-dom";
import {HomePage} from './pages/HomePage'
import ListTripsPage from "./pages/ListTripsPage"
import AdminHomePage from "./pages/AdminHomePage"
import { TripDetailsPage } from "./pages/TripDetailsPage";
import { CreateTripPage } from "./pages/CreateTripPage";
import ApplicationFormPage from "./pages/ApplicationFormPage";
import LoginPage from "./pages/LoginPage";


function App() {
  return (
    <div>
      <BrowserRouter>
          <Switch>
              <Route exact path={"/"}>
                <HomePage/>
              </Route>

              <Route exact path={"/login"}>
                <LoginPage/>
              </Route>
              <Route exact path={"/admin"}>
                <AdminHomePage/>
              </Route>

              <Route exact path={"/public"}>
                <ListTripsPage/>
              </Route>

              <Route exact path={"/tripCreate"}>
                <CreateTripPage/>
              </Route>

              <Route exact path={"/tripDetail"}>
                <TripDetailsPage/>
              </Route>

              <Route exact path={"/applyfortrip"}>
                <ApplicationFormPage/>
              </Route>

              <Route exact path={"/AppForm"}>
                <ApplicationFormPage/>
              </Route>
          </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
