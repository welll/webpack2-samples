import moment from 'moment';

console.log('Iris/src/ui/components/orders/order-info/order-info.js')
const orderCreationDate = 1465334749426
console.log( moment(orderCreationDate).format(`L`) )

console.log('Iris/src/ui/components/orders/ship-groups/ship-group.js')
const shipDate = 1465334749426
console.log( moment(shipDate).format(`L LT`)  ) 

console.log('Iris/src/ui/components/sliver/utils.js')
const startTimeMillis =  1479945600000
const endTimeMillis =    1480118400000

let startMoment = moment(startTimeMillis)
let endMoment = moment(endTimeMillis)
let duration = moment.duration(endMoment.diff(startMoment))
let hours = Math.floor(duration.asHours())
let minutes = duration.get(`minutes`)
let seconds = duration.get(`seconds`)
console.log(`${hours} ${minutes} ${seconds}`)

console.log('Iris/src/univ-services/experience-univ.service.js')
console.log(moment.utc().format(`YYYY-MM-DD\THH:mm:ss`) + `Z`) 
