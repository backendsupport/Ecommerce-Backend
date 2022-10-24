'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    strapi.db.lifecycles.subscribe({
      models:["plugin::users-permissions.user"],
      async beforeCreate(event){
        const {data}=event.params
        console.log(data);
        data.Paymentmethods=[{brand:"",last4:""},{brand:"",last4:""},{brand:"",last4:""}]
        data.Contactinfo=[{name:data.username,email:data.email,phone:""},
      {name:"",email:"",phone:""},{name:"",email:"",phone:""}]
        data.locations=[{street:"",zip:"",city:"",state:""},{street:"",zip:"",city:"",state:""},{street:"",zip:"",city:"",state:""}]
      }
    })
  },
};
