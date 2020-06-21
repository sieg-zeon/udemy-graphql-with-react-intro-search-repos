import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import { Query } from 'react-apollo'
import client from './client'
import { SEARCH_REPOSITORIES } from './graphql'

const VARIBLES = {
  after: null,
  before: null,
  first: 5,
  last: null,
  query: "フロントエンドエンジニア"
}
class App extends Component {
  constructor(props) {
    super(props)
    this.state = VARIBLES
  }
  render() {
    const { query, first, last, after, before} =this.state
    return (
      <ApolloProvider client={client}>
        <Query
          query={SEARCH_REPOSITORIES}
        variables={{query, first, last, after, before}}
        >
          {
            ({ loading, error, data }) => {
              if (loading) return 'loading...'
              if (error) return `Error! ${error.message}`
              console.log({data})
              return <div></div>
            }
          }
        </Query>
      </ApolloProvider>
    )
  }
}

export default App
