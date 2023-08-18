const mongoose = require('mongoose')

const Schema = mongoose.Schema

const logSchema = new Schema({
   title: { type: String },
   entry: { type: String },
   shipIsBroken: { type: Boolean, default: false },
}, { timestamps: true })

const Log = mongoose.model('logs', logSchema)

module.exports = Log