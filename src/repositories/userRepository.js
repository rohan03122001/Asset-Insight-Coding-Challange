const User = require("../models/User");

exports.findAll = async () => {
  return await User.find();
};

exports.create = async (userData) => {
  const newUser = new User(userData);
  return await newUser.save();
};

exports.update = async (id, updateData) => {
  return await User.findByIdAndUpdate(id, updateData, { new: true });
};

exports.delete = async (id) => {
  return await User.findByIdAndDelete(id);
};

// Pagination
exports.findPaginated = async (skip, limit) => {
  return await User.find().skip(skip).limit(limit);
};

// Total User
exports.countUsers = async () => {
  return await User.countDocuments();
};
