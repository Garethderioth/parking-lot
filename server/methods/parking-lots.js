import {ParkingLots, Users} from '/lib/collections';
import {Meteor} from 'meteor/meteor';

/**
 * [function description]
 * @param  {[type]} _id [description]
 * @return {[type]}     [description]
 */
const takeParkingLot = function(_id, currentUserId) {
  const user = Users.findOne(currentUserId);

  const info = {
    fullname: user.profile.fullname,
    license: user.profile.license,
    isPremium: user.isPremium
  };

  ParkingLots.update({userId: currentUserId}, {$set: {info: null, userId: null, isFree: true}}, {multi: true});
  ParkingLots.update({_id}, {$set: {info, userId: currentUserId, isFree: false}});
};

/**
 * [function description]
 * @param  {[type]} userId [description]
 * @return {[type]}        [description]
 */
const notifyUser = function(userId) {
  // TODO: Push notification to the User.
};

export default function () {
  Meteor.methods({
    'parkingLots.takeIt'(_id) {
      check(_id, String);
      takeParkingLot(_id, this.userId);
    }
  });

  Meteor.methods({
    'parkingLots.claimIt'(_id, userId) {
      check(_id, String);
      takeParkingLot(_id, this.userId);
      notifyUser(userId);
    }
  });

  Meteor.methods({
    'parkingLots.leaveIt'(_id) {
      check(_id, String);
      ParkingLots.update({_id}, {$set: {info: null, userId: null, isFree: true}});
    }
  });
}
