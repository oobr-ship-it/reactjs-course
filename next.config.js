const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'oobr_db_user',
        mongodb_password: 'hjJh9c3tp3c0sKiz',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-site',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'oobr_db_user',
      mongodb_password: 'hjJh9c3tp3c0sKiz',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'my-site',
    },
  };
};
