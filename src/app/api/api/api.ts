export * from './salesData.service';
import { SalesDataService } from './salesData.service';
export * from './weatherForecast.service';
import { WeatherForecastService } from './weatherForecast.service';
export const APIS = [SalesDataService, WeatherForecastService];
