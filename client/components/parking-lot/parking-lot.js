Template.parkingLot.helpers({
  isCurrentUser() {
    return Meteor.userId() && Meteor.userId() === this.userId;
  },
  isFreeOrImPremium() {
    const isFree = this.isFree;
    const iAmPremium = Meteor.call('users.isPremium');

    return isFree || iAmPremium;
  }
})

Template.parkingLot.events({
  'click .take-it': function (event) {
    event.preventDefault();
    Meteor.call('parkingLots.takeIt', this._id);
  },
  'click .claim-it': function (event) {
    event.preventDefault();
    Meteor.call('parkingLots.claimIt', this._id, this.userId);
  },
  'click .leave-it':  function (event) {
    event.preventDefault();
    Meteor.call('parkingLots.leaveIt', this._id);
  }
});
