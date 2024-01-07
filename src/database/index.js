import Sequelize from "sequelize";
import User from "../app/models/User"; // Certifique-se de que o caminho do modelo está correto
import configDatabase from "../config/config";

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(configDatabase);
    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
