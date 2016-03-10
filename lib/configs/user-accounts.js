AccountsTemplates.configure({
  onSubmitHook: function (error, state) {
    if (!error) {
      if (state === "signIn") {
        if(Meteor.user().username === 'admin') {
          FlowRouter.go('/admin');
        } else {
          FlowRouter.go('/');
        }
      }
      if (state === "signUp") {
        FlowRouter.go('/');
      }
    }
  },
  onLogoutHook: function () {
    FlowRouter.go('/');
  }
});

const pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
  {
      _id: "username",
      type: "text",
      displayName: "username",
      required: true,
      minLength: 5,
  },
  {
      _id: 'email',
      type: 'email',
      required: true,
      displayName: "email",
      re: /.+@(.+){2,}\.(.+){2,}/,
      errStr: 'Invalid email',
  },
  {
      _id: "fullname",
      type: "text",
      displayName: "Full name",
      required: true
  },
  {
      _id: "license",
      type: "text",
      displayName: "License",
      required: true,
      minLength: 6,
  },
  pwd
]);
