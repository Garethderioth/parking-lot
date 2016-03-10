import {ParkingLots} from '/lib/collections'

Template.parkingLots.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('parkingLots.list');
  });
});

Template.parkingLots.helpers({
  'parkingLots'() {
    return ParkingLots.find();
  }
})
