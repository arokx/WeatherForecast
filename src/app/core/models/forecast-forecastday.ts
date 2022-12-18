import { Astro } from "./forecast-astro.model";
import { Day } from "./forecast-day.model";

export interface Forecastday {
    date: string;
    date_epoch: number;
    day: Day;
    astro: Astro;
}