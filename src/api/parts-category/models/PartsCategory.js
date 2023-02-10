const slugify = require('slugify');

module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
      if (data.title) {
        data.url = slugify(data.title);
      }
    },
    beforeUpdate: async (params, data) => {
      data.url = slugify(data.title);
    },
  },
};
