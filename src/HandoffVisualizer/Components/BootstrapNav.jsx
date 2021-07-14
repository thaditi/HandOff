import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./BootstrapNav.css";

export default class BootstrapNav extends Component {
    render() {
        return (
            <div>
                <Navbar
                    bg="light"
                    expand="md"
                    variant="light"
                    fixed="top"
                    className="navbrand"
                >
                    <Navbar.Brand className="brand" href="#home">
                       
                        Wireless Network Handoff Visualizer
                    </Navbar.Brand>
                   
                </Navbar>
            </div>
        );
    }
}
