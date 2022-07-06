export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export type Visibility = 'bad' | 'poor' | 'good' | 'excellent'

export interface DiaryEntry {
  id: Number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}
