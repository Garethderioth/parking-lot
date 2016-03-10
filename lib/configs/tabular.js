import {Users} from '../collections';

TabularTables = {};

TabularTables.Users = new Tabular.Table({
  name: 'Users',
  collection: Users,
  pub: 'users.list',
  columns: [
    {data: 'emails[0].address', title: 'Email'},
    {data: 'profile.fullname', title: 'Full name'},
    {data: 'profile.license', title: 'License'},
    {data: 'username', title: 'Username'},
    {data: 'isPremium', title: 'Premium', render: function (val, type, doc) {
      if (val) {
        return `<a href="#" data-id="${doc._id}" class="deactive btn btn-sm btn-raised btn-danger">Deactive</a>`;
      } else {
        return `<a href="#" data-id="${doc._id}" class="active btn btn-sm btn-raised btn-primary">Active</a>`;
      }
    }}
  ]
});
