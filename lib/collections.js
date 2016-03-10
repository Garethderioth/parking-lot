import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';

export const ParkingLots = new Mongo.Collection('parkingLots');
export const Users = Meteor.users;
