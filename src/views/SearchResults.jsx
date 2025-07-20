import { useState } from "react";
import Success from "../components/Success";
import Error from "../components/Error";

export default function SearchResults () {
    const [results, setResults] = useState(false);
    if (results) {
        return <Success />
    } else {
        // TODO: change to render the NoResults view
        return <Error />
    }
}