import {Users, ParkingLots} from '/lib/collections';
import {Meteor} from 'meteor/meteor';

export default function() {
  Meteor.methods({
    'users.isPremium'() {
      return Users.findOne(this.userId).isPremium;
    }
  });

  Meteor.methods({
    'users.active'(_id) {
      ParkingLots.update({userId: _id}, { $set: {'info.isPremium': true}});
      Users.update({_id}, { $set: {isPremium: true}});
    }
  });

  Meteor.methods({
    'users.deactive'(_id) {
      ParkingLots.update({userId: _id}, { $set: {'info.isPremium': false}});
      Users.update({_id}, { $set: {isPremium: false}});
    }
  });
}
