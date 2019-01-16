import React, { Component } from 'react';
import Table from './Table';
import Contact from './Contact';
import Clock from './Clock';
import Bildungsweg from './Bildungsweg';

class App extends Component {
    render() {
        return (
            <div className="container">
                <Contact />
                <Table
                    data={this.props.data}
                />
                <Bildungsweg
                    bildungdata={this.props.bildungdata}
                />
               <Clock />
            </div>
        );
    }
}

export default App;