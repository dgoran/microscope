if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Introducing Telescopeg',
    url: 'http://sachagreif.com/introducing-telescope/'
  });

  Posts.insert({
    title: 'Meteorg',
    url: 'http://meteor.com'
  });

  Posts.insert({
    title: 'The Meteor Bookg',
    url: 'http://themeteorbook.com'
  });
}
