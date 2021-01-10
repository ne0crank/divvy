const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CompanySchema = new Schema({
    id: { type: Schema.Types.ObjectId },
    name: { type: String, default: null },
    credit_line: { type: Number, default: null },
    available_credit: { type: Number, default: null }
})

const model = mongoose.model('user', CompanySchema)

module.exports = {
    CompanyModel: model,
    CompanySchema,
    default: CompanySchema
}