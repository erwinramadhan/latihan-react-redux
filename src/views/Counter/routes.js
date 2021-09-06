import Loadable from 'react-loadable';

function Loading() {
    return (
        <div>
            <span>Loading...</span>
        </div>
    )
}

const Counter = Loadable({
    loader: () => import('./Counter'),
    loading: Loading,
})

const routes = [
    {
        path: '/counter',
        exact: true,
        name: 'Counter',
        component: Counter,
    }
]

export default routes;