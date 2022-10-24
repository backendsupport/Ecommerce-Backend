module.exports = {
    suggestedUsers: async (ctx, next) => {
      console.log('/suggested-users accessed.');
      await next();
    }
  };