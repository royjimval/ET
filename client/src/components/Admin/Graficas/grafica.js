import React, { Component } from 'react'
import { PieChart } from 'react-easy-chart';

export default class Grafica extends Component {
    render() {
        return (
            <div>
                <div className="center">
                    <PieChart
                        labels
                        data={[
                            { key: 'Bebidas', value: 100, color: '#aaac84' },
                            { key: 'Postres', value: 200, color: '#dce7c5' },
                            { key: 'Desayunos', value: 50, color: '#e3a51a' }
                        ]}
                        clickHandler={
                            (d) => this.setState({
                                dataDisplay: `The value of ${d.data.key} is ${d.value}`
                            })
                        }
                        styles={{
                            '.chart_text': {
                                fontSize: '2em',
                                fill: '#fff'
                            }
                        }}
                    />
                </div>
                {/* <div>
                    {this.state.dataDisplay ? this.state.dataDisplay : 'Click on a segment to show the value'}
                </div>  */}
            </div>
        );
    }
}
