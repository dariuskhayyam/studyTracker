import React from "react"

class CreateTable extends React.Component{
    render(){
        return(
            <div className="dropdown">
                <button id="CreateTable">+ CREATE TABLE</button>
                <form>
                    <div className="input">
                        <label>Paper:</label><br />
                        <input type="text" /> <br />  
                    </div>

                    <div className="input">
                        <label>Goal Time: </label><br />
                        <input type="text" /> <br />
                    </div>

                    <div className="input">
                        <label>colour: </label>
                        <input type="color" /> 
                    </div>  

                    <div className="input">
                        <input type="submit" /> 
                    </div>  

                </form>
            </div>
        )
    }
}

export default CreateTable