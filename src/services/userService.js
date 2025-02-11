const userRepository = require("../repositories/userRepository");

exports.getAllUsers = async () => {
  return await userRepository.findAll();
};

exports.createUser = async (userData) => {
  return await userRepository.create(userData);
};

exports.updateUser = async (id, updateData) => {
  return await userRepository.update(id, updateData);
};

exports.deleteUser = async (id) => {
  return await userRepository.delete(id);
};

//Paginatioin
exports.getUsersPaginated = async (page, limit) => {
  const skip = (page - 1) * limit;
  const [users, totalCount] = await Promise.all([
    userRepository.findPaginated(skip, limit),
    userRepository.countUsers(),
  ]);

  return { users, totalCount };
};
