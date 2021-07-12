import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomePage } from './HomePage'
import ListTripsPage from "./listTripsPage/ListTripsPage"
import { TripDetailsPage } from "./TripDetailsPage";
import { CreateTripPage } from "./CreateTripPage";
import ApplicationFormPage from "./ApplicationFormPage";
import LoginPage from "./LoginPage";
import AdminHomePage from "./AdminHomePage";

function Router() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/"}>
                        <HomePage />
                    </Route>

                    <Route exact path={"/login"}>
                        <LoginPage />
                    </Route>
                    <Route exact path={"/admin"}>
                        <AdminHomePage />
                    </Route>

                    <Route exact path={"/public"}>
                        <ListTripsPage />
                    </Route>

                    <Route exact path={"/tripCreate"}>
                        <CreateTripPage />
                    </Route>

                    <Route exact path={"/tripDetail"}>
                        <TripDetailsPage />
                    </Route>

                    <Route exact path={"/applyfortrip/:id"}>
                        <ApplicationFormPage />
                    </Route>

                    <Route exact path={"/AppForm"}>
                        <ApplicationFormPage />
                    </Route>
                </Switch>

            </BrowserRouter>
        </div>
    );
}

export default Router;
