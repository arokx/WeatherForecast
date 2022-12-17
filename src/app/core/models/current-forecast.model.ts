import { Current } from "./current-weather.model";
import { Location } from "./location.model";

export interface CurrentForecast {
    location: Location;
    current: Current;
}