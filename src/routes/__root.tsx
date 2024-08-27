import { createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
    component: RootComponent
});

function RootComponent() {
    return (
        <div>
            <h1>Hello from React and TanStack Router</h1>
        </div>
    );
}