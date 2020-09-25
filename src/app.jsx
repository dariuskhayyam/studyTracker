import React from "react"
import LogOut from "./LogOut"
import CreateTable from "./CreateTable"

class App extends React.Component{
    render(){
        return(
            <div>
                <LogOut />
                <CreateTable />
            </div>
        )
    }
}

export default App