import * as Yup from "yup";
import Category from "../models/Category";
import User from "../models/User";
class CategoryController {
  async store(req, res) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required(),
      });

      try {
        await schema.validateSync(req.body, { abortEarly: false });
      } catch (error) {
        return res.status(400).json({ message: error.errors });
      }
      const { admin: isAdmin } = await User.findByPk(req.userId);

      if (!isAdmin) {
        return res.status(401);
      }

      const { filename: path } = req.file;

      const { name } = req.body;

      const categoryExists = await Category.findOne({ where: { name } });

      if (categoryExists) {
        return res.status(400).json({ error: "User already exists" });
      }

      const { id } = await Category.create({
        name,
        path,
      });

      return res.json({ name, id });
    } catch (error) {
      console.log(error);
    }
  }

  async index(req, res) {
    const category = await Category.findAll();

    return res.json(category);
  }

  async update(req, res) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string(),
      });

      try {
        await schema.validateSync(req.body, { abortEarly: false });
      } catch (error) {
        return res.status(400).json({ message: error.errors });
      }
      const { admin: isAdmin } = await User.findByPk(req.userId);

      if (!isAdmin) {
        return res.status(401);
      }

      const { id } = req.params;
      const { name } = req.body;

      const category = await Category.findByPk(id);

      if (!category) {
        return res
          .status(401)
          .json({ error: "Make sure your category ID is correct" });
      }

      let path;
      if (req.file) {
        path = req.file.filename;
      }

      await Category.update(
        {
          name,
          path,
        },
        { where: { id } }
      );

      return res.status(200).json();
    } catch (error) {
      console.log(error);
    }
  }
}

export default new CategoryController();
