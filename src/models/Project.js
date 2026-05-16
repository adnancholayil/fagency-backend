const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  desc: { type: String, required: true },
  details: { type: String, required: true },
  features: [{ type: String }],
  link: { type: String },
  image: { type: String },
  images: [{ type: String }],
  color: { type: String, default: 'text-[#FFC107]' }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
