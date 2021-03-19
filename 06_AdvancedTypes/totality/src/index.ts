type WeekDay = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri'
type Day = WeekDay | 'Sat' | 'Sun'

function getNextDay(w: WeekDay): Day{
  switch(w) {
    case 'Mon': return 'Tue'
  }
  // switchを通過してしまった場合はundefinedなのだが・・・
}