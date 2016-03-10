Template.parkingLot.onCreated(function() {
  this.iAmPremium = new ReactiveVar(false);

  Meteor.call('users.isPremium', (err, isPremium) => {
    if (!err) {
      this.iAmPremium.set(isPremium);
    }
  });
});

Template.parkingLot.helpers({
  isCurrentUser() {
    return Meteor.userId() && Meteor.userId() === this.userId;
  },
  isFreeOrImPremium() {
    return Template.instance().iAmPremium.get() || this.isFree;
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
