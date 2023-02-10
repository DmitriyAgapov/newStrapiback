'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    const extensionService = strapi.service("plugin::graphql.extension");

    extensionService.use(({ strapi }) => ({
      typeDefs: `
            type Query {
              part(url: String!): PartEntityResponse
              truckCategory(url: String!): TruckCategoryEntityResponse
              partsCategory(url: String!): PartsCategoryEntityResponse
              truck(url: String!): TruckEntityResponse
            }
          `,
      resolvers: {Query: {
          part: {
            resolve: async (parent, args, context) => {
              const { toEntityResponse } = strapi.service(
                "plugin::graphql.format"
              ).returnTypes;

              const data = await strapi.services["api::part.part"].find({
                filters: { url: args.url },
              });

              const response = toEntityResponse(data.results[0]);

              console.log("##################", response, "##################");

              return response;
            },
          },
          truck: {
            resolve: async (parent, args, context) => {
              const { toEntityResponse } = strapi.service(
                "plugin::graphql.format"
              ).returnTypes;

              const data = await strapi.services["api::truck.truck"].find({
                filters: { url: args.url },
              });

              const response = toEntityResponse(data.results[0]);

              console.log("##################", response, "##################");

              return response;
            },
          },
          truckCategory: {
            resolve: async (parent, args, context) => {
              const { toEntityResponse } = strapi.service(
                "plugin::graphql.format"
              ).returnTypes;

              const data = await strapi.services["api::truck-category.truck-category"].find({
                filters: { url: args.url },
              });

              const response = toEntityResponse(data.results[0]);

              console.log("##################", response, "##################");

              return response;
            },
          },
          partsCategory: {
            resolve: async (parent, args, context) => {
              const { toEntityResponse } = strapi.service(
                "plugin::graphql.format"
              ).returnTypes;

              const data = await strapi.services["api::parts-category.parts-category"].find({
                filters: { url: args.url },
              });

              const response = toEntityResponse(data.results[0]);

              console.log("##################", response, "##################");

              return response;
            },
          },

        },},
    }));
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {

  },
};
