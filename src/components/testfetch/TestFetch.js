import React from 'react'
class TestFetch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentCharacter: {}
        }
    }
    componentDidMount() {
        this.myTestFetch()
    }
    myTestFetch() {
        fetch("https://swapi.dev/api/people/15")
            .then(res => res.json())
            .then(characterJSON => {
                this.setState({ currentCharacter: characterJSON })
            })
    }
    render() {
        return (
            <div className="TestFetch">
                Name: {this.state.currentCharacter.name}
                <br/> 
                Height: {this.state.currentCharacter.height}
                <br/>
                Weight: {this.state.currentCharacter.mass}
                <br/> 
                Gender: {this.state.currentCharacter.gender}
                <br/> 
                Species: {this.state.currentCharacter.species}
                <br/>
                Skin Color: {this.state.currentCharacter.skin_color}
                <br/> 
            </div>
        )
    }
}
export default TestFetch;