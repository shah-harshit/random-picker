
import React, { FunctionComponent, lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import {
    AppRoute,
} from "../../utils/routes/routes.util";

const RandomPickerPage = lazy(() =>
    import(
        /* webpackChunkName: "random-picker-page" */
        "../../pages/random-picker/random-picker"
    ).then((module) => ({ default: module.RandomPickerPage }))
);

const PageNotFoundPage = lazy(() =>
    import(
        /* webpackChunkName: "page-not-found-page" */
        "../../pages/page-not-found/page-not-found"
    ).then((module) => ({ default: module.PageNotFound }))
);

export const RandomPickerRouter: FunctionComponent = () => {
    return (
        <Suspense>
            <Switch>
                {/* Random picker path */}
                <Route exact path={AppRoute.BASE}>
                    {/* Redirect to random picker path */}
                    <Redirect to={AppRoute.RANDOM_PICKER} />
                </Route>

                {/* Random picker path */}
                <Route
                    exact
                    component={RandomPickerPage}
                    path={AppRoute.RANDOM_PICKER}
                />

                {/* No match found, render page not found */}
                <Route component={PageNotFoundPage} />
            </Switch>
        </Suspense>
    );
};
