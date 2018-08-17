import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import './grafica.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Grafica extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
    }
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right',
    location: 'City'
  }

  render() {
    const role = this.props.auth.user.role
    if (role === 'all') {

      return (
        <div className="chart divgraficas">
          <Bar className="graphsbar" fontColor="white"
            data={this.state.chartData}
            options={{
              title: {
                display: this.props.displayTitle,
                text: 'Most selled products ' + this.props.location,
                fontSize: 25,
                fontColor: "white"
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition,
                fontColor: "white"

              }
            }}
          />

          <Line
            data={this.state.chartData}
            options={{
              title: {
                display: this.props.displayTitle,
                text: 'Most selled products ' + this.props.location,
                fontSize: 25
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition
              }
            }}
          />

          <Pie
            data={this.state.chartData}
            options={{
              title: {
                display: this.props.displayTitle,
                text: 'Most selled products ' + this.props.location,
                fontSize: 25
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition
              }
            }}
          />
        </div>
      )
    } else {
      return (
        <h1>No se puede mi joven</h1>
      )
    }
  }
}

Grafica.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Grafica)