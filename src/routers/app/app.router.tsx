
import React, { FunctionComponent, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { AppRoute } from "../../utils/routes/routes.util";

const RandomPickerRouter = lazy(() =>
    import(
        /* webpackChunkName: "random-picker-router" */
        "../random-picker/random-picker.router"
    ).then((module) => ({ default: module.RandomPickerRouter }))
);

export const AppRouter: FunctionComponent = () => {

    return (
        <Switch>
            {/* Direct base path to random picker router */}
            <Route
                component={RandomPickerRouter}
                path={AppRoute.BASE}
            />

        </Switch>
    );
};
