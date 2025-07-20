import Card from "./Card";
import Success from "./Success";
import Error from "./Error";
import { useState } from "react";



export default function Result() {
    const [loading, setLoading] = useState(false);
    
    if (loading) {
            return <Success />   
    } else {
        return <Error />
    }
}