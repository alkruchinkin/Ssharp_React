import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name; //им€ компонента

  constructor(props) {// онструктор компанента
    super(props);
    this.state = { forecasts: [], loading: true };//начальное состо€ние
  }

  componentDidMount() {//это метод жизненного цикла, который вызываетс€ после того, как компонент был отрендерен в DOM
    this.populateWeatherData();//загрузки данных о погоде
  }

  static renderForecastsTable(forecasts) {//метод возвращает JSX
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map(forecast =>
            <tr key={forecast.date}>
              <td>{forecast.date}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary2}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {//JSX-код, который определ€ет, как компонент должен отобразитьс€
    let contents = this.state.loading //обь€вление переменной 
      ? <p><em>Loading...</em></p>
      : FetchData.renderForecastsTable(this.state.forecasts);//выхов метода

    return (
      <div>
        <h1 id="tabelLabel" >Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateWeatherData() {
    const response = await fetch('weatherforecast');
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }
}
