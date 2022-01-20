import React, {Component} from 'react'

export default class App extends Component {


    componentDidMount () {
        const URL = "http://api.open-notify.org/astros.json"

        fetch(URL)
        .then(resp => resp.json())
        .then(data => console.log(data))
    }

    render () {return null}
}