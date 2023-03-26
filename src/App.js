import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import Navbar from "./components/Navbar.js";
import Gallery from "./components/Gallery.js";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <Navbar refreshFn={async () => await queryClient.refetchQueries()} />
                <Gallery />
            </div>
        </QueryClientProvider>
    );
}

export default App;
