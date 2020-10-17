import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar, Button} from "react-bootstrap";
import Logo from "../resources/Logo.png"

function DashboardScreen() {
    return (
        <container>
            <Navbar bg="dark">
                <Navbar.Brand>
                    <img
                        src={Logo}
                        width="75f"
                        height="50f"
                        className ="d-inline-block align top"
                        alt ="Sequence, Oscillate, n GO!"
                    />
                </Navbar.Brand>
                <Button></Button>
            </Navbar>
            <h1>MAIN PAGE</h1>
        </container>
    );
}

ReactDOM.render(
    <DashboardScreen/>,
    document.getElementById('root')
);

export default DashboardScreen;
