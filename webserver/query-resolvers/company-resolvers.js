const { CompanyModel } = require('../data-models/Company')
const { packageModel } = require('./utils.js')

async function find(criteria) {
    const query = Object.keys(criteria).length ?
        CompanyModel.find(criteria) :
        CompanyModel.find()

    const companies = await query.exec()

    return packageModel(companies)
}

async function findOne(id) {
    const query = CompanyModel.findById(id)
    const company = await query.exec()

    return packageModel(company)[0] || null
}

module.exports = {
    find,
    findOne
}