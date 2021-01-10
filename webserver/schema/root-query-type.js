const graphql = require('graphql')
const TransactionType = require('./transaction-type')
const Transactions = require('../query-resolvers/transaction-resolvers.js')
const CompanyType = require('./company-type')

const {
    GraphQLBoolean,
    GraphQLFloat,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString
} = graphql
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        company: {
            type: CompanyType,
            args: {
                id: { type: GraphQLString }
            },
            resolve(parentValue, args) {
                return Companies.findOne(args.id)
            }
        },
        transaction: {
            type: TransactionType,
            args: {
                id: { type: GraphQLString }
            },
            resolve(parentValue, args) {
                return Transactions.findOne(args.id)
            }
        },
        companies: {
            type: GraphQLList(CompanyType),
            args: {
                id: { type: GraphQLString },
                name: { type: GraphQLString },
                credit_line: { type: GraphQLFloat },
                available_credit: { type: GraphQLFloat }
            },
            resolve(parentValue, args) {
                return Companies.find(args)
            }
        },
        transactions: {
            type: GraphQLList(TransactionType),
            args: {
                amount: { type: GraphQLFloat },
                credit: { type: GraphQLBoolean },
                debit: { type: GraphQLBoolean },
                description: { type: GraphQLString },
                merchant_id: { type: GraphQLString },
                company_id: { type: GraphQLString },
                user_id: { type: GraphQLString }
            },
            resolve(parentValue, args) {
                return Transactions.find(args)
            }
        }
    })
})

module.exports = RootQuery