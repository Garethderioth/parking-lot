import {Users} from '/lib/collections';
import {Meteor} from 'meteor/meteor';

export default function() {
  Meteor.methods({
    'users.isPremium'() {
      return Users.findOne(this.userId).isPremium;
    }
  });

  Meteor.methods({
    'users.active'(_id) {
      Users.update({_id}, { $set: {isPremium: true}});
    }
  });

  Meteor.methods({
    'users.deactive'() {
      Users.update({_id}, { $set: {isPremium: false}});
    }
  });
}
