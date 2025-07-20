import Success from "../components/Success";
import Error from "../components/Error";

export default function SearchResults () {
    if (results) {
        <Success />
    } else {
        // TODO: change to render the NoResults view
        <Error />
    }
}