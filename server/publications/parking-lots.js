import {ParkingLots} from '/lib/collections';
import {Meteor} from 'meteor/meteor';

export default function () {
  Meteor.publish('parkingLots.list', function () {
    const selector = {};
    const options = {
      fields: {_id: 1, name: 1, isFree: 1, userId: 1, info: 1},
      sort: {isFree: -1, name: -1},
      limit: 10
    };

    return ParkingLots.find(selector, options);
  });
}
