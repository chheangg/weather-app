import minTemp from '../assets/min-temp.png';
import maxTemp from '../assets/max-temp.png';
import feelsLike from '../assets/feels-like.png';
import visibility from '../assets/visibility.png';
import wind from '../assets/wind.png';
import humidity from '../assets/humidity.png';

const icon = [
  {
    el: 'min-temp',
    icon: minTemp,
  },
  {
    el: 'max-temp',
    icon: maxTemp,
  },
  {
    el: 'feel-like',
    icon: feelsLike,
  },
  {
    el: 'visibility',
    icon: visibility,
  },
  {
    el: 'wind-speed',
    icon: wind,
  },
  {
    el: 'humidity',
    icon: humidity,
  },
];

export default { icon };
