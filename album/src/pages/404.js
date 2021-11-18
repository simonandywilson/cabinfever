import * as React from "react";
import { Link } from "gatsby";

// markup
const NotFoundPage = () => {
    return (
        <main
            style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#ffffff",
            }}
        >
            <h1>Page not found</h1>
            <Link to="/">Go home</Link>.
        </main>
    );
};

export default NotFoundPage;
