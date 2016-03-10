import {ParkingLots} from '/lib/collections';

export default function () {
  if (!ParkingLots.findOne()) {
    for (let i = 0; i <= 5; i++) {
      ParkingLots.insert({ name: 30 + i, isFree: true });
    }
  }

  if(!Meteor.users.findOne()) {
    Accounts.createUser({
      username: 'admin',
      password: 'superadmin',
    });
  }
}
