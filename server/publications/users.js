import {Users} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('users.list', function (tableName, ids, fields) {
    check(tableName, String);
    check(ids, Array);
    check(fields, Match.Optional(Object));

    // FIXME: It's not working with Tabular
    const selector = {_id: {$in: ids}, username: {$ne: 'admin'}};
    const options = {
      fields: fields
    };

    return Users.find(selector, options);
  });
}
