Template.usersList.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('users.list');
  });
});
