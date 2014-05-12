if(Meteor.isClient) {
  Router.map(function () {
    this.route('home', {
      path: '/',
      template: 'sample',
      layoutTemplate: 'layout',
      data: {text: 'Rendered with blaze-layout yield!'}, // if no data provided - its null in Template.sample.created
      yieldTemplates: {
          'sample': {to: 'header'},
          'sample': {to: 'footer'}  // <-- check here too: cant set the same into different yields
        }
    });
  });

  Template.sample.created = function () {
    // this.data - wont be changed for templates rendered with IR 
    this.data = _.extend(this.data || {}, {
      bgcolor: 'F0F2F3',
      textcolor: '26375A'
    })
  }

  Template.sample.helpers({
    'logThis': function () {
      return JSON.stringify(this);
    }
  })
}
