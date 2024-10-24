import mongoose from 'mongoose';

const categoriesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true, // Ensure category names are unique
    },
    images: [
      {
        type: String,
        required: true, // Each image URL must be a string
      },
    ],
    color: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
); // Adds createdAt and updatedAt automatically

export const Category = mongoose.model('Category', categoriesSchema);
