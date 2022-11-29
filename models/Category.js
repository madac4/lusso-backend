const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        brands: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Brand' }],
        subcategories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subcategory' }],
    },
    { timestamps: true },
);

module.exports = mongoose.model('Category', CategorySchema);
