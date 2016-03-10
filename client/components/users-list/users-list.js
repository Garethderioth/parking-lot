Template.usersList.events({
  'click .deactive': function(event) {
    event.preventDefault();
    const userId = event.currentTarget.dataset.id;
    Meteor.call('users.deactive', userId);
  },
  'click .active': function(event) {
    event.preventDefault();
    const userId = event.currentTarget.dataset.id;
    Meteor.call('users.active', userId);
  }
});
