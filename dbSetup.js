
let res = [
  db = db.getSiblingDB('hdc') ,
  db.createCollection('bills'),
//   db.container.createIndex({ myfield: 1 }, { unique: true }),
db.registros.createIndex({ "accountID": 1 }),
  // db.registros.createIndex({ "timeStampStartSchedule" : -1 }),
  db.bills.insert({ timeStampStartSchedule: '2001-01-01T01:01:01.001Z', schedule: 'db_start' })
  // db.statements.deleteOne()

]

printjson(res)

// if (error) {
//   print('Error, exiting')
//   print(error)
//   quit(1)
// }
