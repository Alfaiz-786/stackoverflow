import mongoose from "mongoose";
import User from "../models/auth.js";

export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    const allUserDetails = [];
    allUsers.forEach((users) => {
      allUserDetails.push({
        _id: users._id,
        name: users.name,
        about: users.about,
        tags: users.tags,
        joinedOn: users.joinedOn,
        file: users.file,
      });
    });
    res.status(200).json(allUserDetails);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateProfile = async (req, res) => {
  const { id: _id } = req.params;
  const { name, about, tags } = req.body;

  try {
    let updatedProfile;

    if (req.file) {
      // If a file is provided, update the 'file' field
      updatedProfile = await User.findByIdAndUpdate(
        _id,
        {
          $set: { name, about, tags, file: req.file.filename },
        },
        { new: true }
      );
    } else {
      // If no file is provided, update other fields without changing 'file'
      updatedProfile = await User.findByIdAndUpdate(
        _id,
        { $set: { name, about, tags } },
        { new: true }
      );
    }

    res.status(200).json(updatedProfile);
  } catch (error) {
    res.status(405).json({ message: error.message });
  }
};
