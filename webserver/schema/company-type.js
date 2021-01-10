const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLFloat
} = graphql

const CompanyType = new GraphQLObjectType({
    name: 'Company',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        credit_line: { type: GraphQLFloat },
        available_credit: { type: GraphQLFloat }
    })
})

module.exports = CompanyType