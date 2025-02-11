const userService = require("../services/userService");

exports.getUsers = async (req, res) => {
  try {
    //Default setup
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const { users, totalCount } = await userService.getUsersPaginated(
      page,
      limit
    );

    //Pagination
    const totalPages = Math.ceil(totalCount / limit);

    res.json({
      data: users,
      meta: {
        totalUsers: totalCount,
        currentPage: page,
        totalPages,
        limit,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const newUser = await userService.createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updated = await userService.updateUser(req.params.id, req.body);
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await userService.deleteUser(req.params.id);
    res.json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
