import React, { Component } from 'react'

export default class Clock extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            time: new Date()
        }
    }

    componentDidMount() {
        setInterval(this.update, 1000)
    }

    update = () => {
        this.setState({
            time: new Date()
        })
    };

    render() {
        const h = this.state.time.getHours()
		const m = this.state.time.getMinutes()
        const s = this.state.time.getSeconds()
        
        return (
            <div>
               <h2> {h % 12}:{(m < 10 ? '0' + m : m)}:{(s < 10 ? '0' + s : s)} {h < 12 ? 'AM' : 'PM'}</h2>
            </div>
        )
    }
}
