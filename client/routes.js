FlowRouter.route('/', {
  action() {
    BlazeLayout.render('mobileLayout', {content: 'parkingLots'});
  }
});

FlowRouter.route('/signin', {
  action() {
    BlazeLayout.render('mobileLayout', {content: 'signin'});
  },
  name: 'signin'
});

FlowRouter.route('/admin', {
  action() {
    BlazeLayout.render('adminLayout', {content: 'usersList'});
  }
});
