FlowRouter.route('/', {
  action() {
    BlazeLayout.render('mobileLayout', {content: 'parkingLots'});
  }
});
