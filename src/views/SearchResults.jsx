import { useEffect, useState } from "react";
import Error from "../components/Error";

export default function SearchResults () {
    const [results, setResults] = useState([]);
    
    useEffect(() => {
        const fetchMembers = async () => {
            const baseURL = "https://findmymla.social/wp-json/wp/v2/mla";
            try {
                const response = await fetch(baseURL);
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }

                const json = await response.json();
                setResults(json);
            } catch (error) {
                console.log(error.message);
        } finally {
            console.log("Always executed");
        }
    };

    fetchMembers();
    }, []);
    
    if (results) {
        return (
          <div>
            <p>Results found! Loading results...</p>
            <ul>
              {results.map((result) => (
                <li key={result.id}>{result.title.rendered}</li>
              ))}
            </ul>
          </div>
        );
    } else {
        // TODO: change to render the NoResults view
        return <Error />
    }
}