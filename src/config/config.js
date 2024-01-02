module.exports = {
  development: {
    username: "postgres",
    password: "postgres",
    database: "codeburguer",
    host: "localhost",
    dialect: "postgres",
    define: {
      timespamps: true,
      underscored: true,
      underscoredAll: true,
    },
  },
  test: {
    username: "postgres",
    password: "postgres",
    database: "codeburguer",
    host: "localhost",
    dialect: "postgres",
  },
  production: {
    username: "postgres",
    password: "postgres",
    database: "codeburguer",
    host: "localhost",
    dialect: "postgres",
  },
};
