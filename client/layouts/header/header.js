Template.header.events({
  'click #signin'(event) {
    event.preventDefault();
    FlowRouter.go('/signin');
  },
  'click #signout'(event) {
    event.preventDefault();
    AccountsTemplates.logout();
  },
  'click #brand'(event) {
    event.preventDefault();
    FlowRouter.go('/');
  }
});

Template.header.helpers({
  'isSigninRoute'() {
    return FlowRouter.getRouteName() === 'signin';
  }
})
