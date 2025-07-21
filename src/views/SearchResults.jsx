import { useEffect, useState } from "react";
import Success from "../components/Success";
import Error from "../components/Error";

export default function SearchResults () {
    const [results, setResults] = useState(false);
    
    useEffect(() => {
        const fetchMembers = async () => {
            const baseURL = "https://findmymla.social/wp-json/wp/v2/mla";
            try {
                const response = await fetch(baseURL);
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }
            }
        } catch (err) {

        } finally {

        }l
    }, []);
    
    if (results) {
        return <Success />
    } else {
        // TODO: change to render the NoResults view
        return <Error />
    }
}