import Vue from 'vue'

Vue.filter('formatDate', function (earlierdate) {
  let laterdate = new Date()
  earlierdate = new Date(earlierdate)
  // คำนวณความแตกต่างของวันที่
  var difference = laterdate.getTime() - earlierdate.getTime()
  // แปลงเป็นวัน ชม. นาที วินาที
  var daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24)
  difference -= daysDifference * 1000 * 60 * 60 * 24
  var hoursDifference = Math.floor(difference / 1000 / 60 / 60)
  difference -= hoursDifference * 1000 * 60 * 60
  var minutesDifference = Math.floor(difference / 1000 / 60)
  difference -= minutesDifference * 1000 * 60
  var secondsDifference = Math.floor(difference / 1000)
  // แสดงผล
  if (daysDifference > 7)
    return (
      earlierdate.toString().split(' ')[1] +
      ' ' +
      earlierdate.toString().split(' ')[2] +
      ', ' +
      earlierdate.toString().split(' ')[3]
    )
  if (daysDifference) return daysDifference + ' วัน ที่แล้ว'
  if (hoursDifference) return hoursDifference + ' ชั่วโมง ที่แล้ว'
  if (minutesDifference) return minutesDifference + ' นาที ที่แล้ว'
  if (secondsDifference) return secondsDifference + ' วินาที ที่แล้ว'
})
Vue.filter('titleCartoon', function (cartoon) {
  if (cartoon.amount_of_episodes == 1 && cartoon.status == 'end') {
    return cartoon.title + ' ตอนเดียวจบ'
  } else if (cartoon.status == 'end') {
    return (
      cartoon.title + ' ตอนที่ 1-' + cartoon.amount_of_episodes + ' (จบแล้ว)'
    )
  } else {
    return cartoon.title + ' ตอนที่ 1-' + cartoon.amount_of_episodes
  }
})
