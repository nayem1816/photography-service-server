const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        createdAt: { type: Date, default: Date.now },
    },
    { versionKey: false }
);

const AdminModel = mongoose.model('admins', AdminSchema);

module.exports = AdminModel;
