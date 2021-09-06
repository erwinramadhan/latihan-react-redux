import { Route, Switch } from "react-router";
import routes from "../../views/Counter/routes";

const CounterContainer = () => {

    const handleRouter = () => {
        return routes.map((route, idx) => {
            const { path, exact, name } = route;
            return route ? (
                <Route
                    key={idx}
                    path={path}
                    exact={exact}
                    name={name}
                    render={(props) => {
                        if(route.component) {
                            return <route.component {...props} />
                        }
                    }}
                    />
            ) : null;
        })
    }

    return (
        <div className="counter-container">
            <Switch>
                {handleRouter()}
            </Switch>
        </div>
    )
}

export default CounterContainer;