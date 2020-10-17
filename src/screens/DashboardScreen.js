import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar, Button} from "react-bootstrap";
import Logo from "../resources/Logo.png"

class DashboardScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isRecord: false,
        };
    }
    onClickRecord = () => {
        let curState = this.state.isRecord;
        if(!curState){
        }
        else{
        }
        this.setState(state => ({
            isRecord: !state.isRecord
        }));
    }
    render() {
        let recordPlay = this.state.isRecord ? "STOP" : "RECORD";
        return (
            <container>
                <Navbar bg="dark">
                    <Navbar.Brand>
                        <img
                            src={Logo}
                            width="75f"
                            height="50f"
                            className="d-inline-block align top"
                            alt="Sequence, Oscillate, n GO!"
                        />
                    </Navbar.Brand>
                    <Button variant="dark">SAVE</Button>
                    <Button variant="dark">EDIT</Button>
                    <Button variant="dark" onClick={this.onClickRecord}>{recordPlay}</Button>
                    <Button variant="dark">PLAY</Button>
                </Navbar>
                <h1>MAIN PAGE</h1>
            </container>
        );
    }
}



ReactDOM.render(
    <DashboardScreen/>,
    document.getElementById('root')
);

export default DashboardScreen;
