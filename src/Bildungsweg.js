import React, { Component } from 'react';
import Description from './Description';

const TableBody = props => {
    const jobList = props.bildungdata.map((row, index) => {
        return (
            <tbody key={index}>
                <tr style={{ "color": "#637c7c" }}><td>{row.date}</td></tr>
                <tr><td><b>{row.schule}</b></td></tr>
                <tr><td>{row.abschluss}</td></tr>
                <tr><td>{row.ortLand}</td></tr>
                <tr><td><Description index={row.schuleDescription} /> </td></tr>
            </tbody>
        );
    });
    return <table>{jobList}</table>;
}

const WeitereKenntnise = () => {
    return (
        <div>
            <h5>Sprachen: </h5>
            <ul>
                <li>Rumänisch Muttersprache </li>
                <li>Deutsch Level B1/B2</li>
                <li>Englisch Level C1 </li>
                <li>Italienisch Level B1 </li>
            </ul>
        </div>
    )
}

const Programmiersprachen = () => {
    return (
        <div>
            <h5>Programmiersprachen: </h5>
            <ul><li>Sehr gute Kenntnisse insbesondere in C, C++, Java, Pascal,
Phyton, Django, HTML5, CSS3, PHP, React, JSX, ES6, SQL, QT, UML, Jsmooth,
Launch4J, Javascript, NodeJs, ExpressJs, NPM, Yarn, Mongoose,
MongoDB, Git </li></ul>
        </div>
    )
}

const Betriebssysteme = () => {
    return (
        <div>
            <h5>Betriebssysteme: </h5>
            <ul><li>Versiert auf Microsoft Windows </li></ul>
        </div>
    )
}

const Datenbanksysteme = () => {
    return (
        <div>
            <h5>Datenbanksysteme: </h5>
            <ul><li>Theoretische Kenntnisse SQL, sehr gute Kenntnisse MongoDB </li></ul>
        </div>
    )
}

const SoftSkills = () => {
    return (
        <div>
            <h5>SoftSkills: </h5>
            <ul>
                <li>Hoch motiviert und engagiert</li>
                <li>äußerst zuverlässig</li>
                <li>Teamplayer</li>
                <li>Verantwortungsbewusst</li>
                <li>Ziel und leistungsorientiert</li>
                <li>Gute Kommunikationsfähigkeit</li>
                <li>Hohe Belastbarkeit</li>
                <li>Stressresistent</li>
            </ul>
            <button><h5> <a style={{ "color": "white" }} href="https://github.com/opreararesstefan/lebenslaufSrc">View source on Github</a></h5></button>
        </div>
    )
}

class Bildungsweg extends Component {
    render() {
        const { bildungdata } = this.props;
        return (
            <div className="container">
                <TableBody className="table"
                    bildungdata={bildungdata}
                />
                <WeitereKenntnise />
                <Programmiersprachen />
                <Betriebssysteme />
                <Datenbanksysteme />
                <SoftSkills />
            </div>
        );
    }
}

export default Bildungsweg;