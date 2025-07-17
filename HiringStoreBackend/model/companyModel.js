const mongoose = require("mongoose");

const CompaniesSchema = new mongoose.Schema({

})
const Company = mongoose.model('Company', CompaniesSchema)
module.exports = Company