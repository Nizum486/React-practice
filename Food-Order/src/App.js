import { Fragment } from "react"

import Header from "./components/Layout/Header"
import Footer from "./components/Layout/Footer"
import Meals from "./components/Meals/Meals"


function App() {
    return (
        <Fragment>
            <Header />
            <main>
              <Meals/>
            </main>
            <Footer />
        </Fragment>
    )
}

export default App
