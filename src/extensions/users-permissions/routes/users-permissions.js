module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/set-settings',
      handler: 'User.setSettings',
      config: {
        policies: [],
      },
    },
  ],
}
