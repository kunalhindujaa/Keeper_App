import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

//1. Implement Add note functionality
// - Create a constant that keeps track of title and content
// - Pass the new note back to the app
// - Add the new note to the array
// - Take array and render seprate nOte components for each item

//2. Implement Delete note functionality
// - Callback from Note component to trigger a delete function
// - Use the filter function to filter out the item that needs deletion
// - Pass a id over to Note component, pass it back to the App while deleting
