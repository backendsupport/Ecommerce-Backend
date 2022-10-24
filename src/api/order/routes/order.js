'use strict';

/**
 * order router.
 */



const { createCoreRouter } = require("@strapi/strapi").factories;
const defaultRouter = createCoreRouter("api::order.order");

const customRouter = (innerRouter, extraRoutes = []) => {
  let routes;
  return {
    get prefix() {
      return innerRouter.prefix;
    },
    get routes() {
      if (!routes) routes = innerRouter.routes.concat(extraRoutes);
      return routes;
    },
  };
};

const myExtraRoutes = [
  {
    method: "POST",
    path: "/orders/place",
    handler: "api::order.order.place",
    config:{
        policies:[]
    }
  }
];

module.exports = customRouter(defaultRouter, myExtraRoutes);