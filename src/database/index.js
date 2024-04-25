import Sequelize from "sequelize";

import Product from "../app/models/Product";
import User from "../app/models/User";
import Category from "../app/models/Category";

// import configDatabase from "../config/config";
import mongoose from "mongoose";

const models = [User, Product, Category];

class Database { 
  constructor() {
    this.init();
    this.mongo(); 
  }

  init() {
    this.connection = new Sequelize("postgresql://postgres:FWgZqdCmwDaibaPlVEGOrQaAkjWFBPsu@roundhouse.proxy.rlwy.net:26745/railway");
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }

  mongo() {
    this.moncoConnection = mongoose.connect(
      "mongodb://mongo:RHEHndClqZrLTpGNvXBqUqqAgFIaETAg@viaduct.proxy.rlwy.net:55045"
    );
  }
}

export default new Database();
