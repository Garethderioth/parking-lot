Template.usersList.events({
  'click .deactive'(event) {
    event.preventDefault();
    const userId = event.currentTarget.dataset.id;
    Meteor.call('users.deactive', userId);
  },
  'click .active'(event) {
    event.preventDefault();
    const userId = event.currentTarget.dataset.id;
    Meteor.call('users.active', userId);
  }
});
