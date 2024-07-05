import { Component } from "react"
import BookBel from "./conponents/BookBel"
import Books from "./conponents/Books"


class App extends Component {
    render() {
        return (
            <div>
                <BookBel />
                <Books />
                
            </div>
        )
    }
}
export default App