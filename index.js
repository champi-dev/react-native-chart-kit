// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
import AbstractChart from './src/abstract-chart';
import LineChart from './src/line-chart';
import BarChart from './src/bar-chart';
import PieChart from './src/pie-chart';
import ProgressChart from './src/progress-chart';
import ContributionGraph from './src/contribution-graph';
import StackedBarChart from './src/stackedbar-chart';

export {
  AbstractChart,
  BarChart,
  LineChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
};
