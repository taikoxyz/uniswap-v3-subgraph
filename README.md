# Uniswap V3 and V3-Tokens Subgraph

## Development

1. Install dependencies
`yarn install`

2. Build a v3 subgraph
`yarn build --network <network> --subgraph-type v3` 

3. Deploy a v3 subgraph
`yarn build --network <network> --subgraph-type v3 --deploy`

4. Build a v3-tokens subgraph
`yarn build --network <network> --subgraph-type v3-tokens`

5. Deploy a v3-tokens subgraph
`yarn build --network <network> --subgraph-type v3-tokens --deploy`

Note: Deployments will fail if there are uncommitted changes in the subgraph. Please commit your changes before deploying.

## Taiko Alethia and Taiko Hoodi Testnet via Goldsky

1. Install dependencies
`yarn install`

2. Codegen types
`yarn build --network <taiko/taiko-hoodi-testnet> --subgraph-type <v3/v3-tokens>` 

3. Build graph
Note that once codgen aka `yarn build` you can create the build any graph with this command.
`yarn build:graph:<v3/v3-tokens>`

4. Deploy to Goldsky
`yarn deploy:<v3/v3-tokens>:<taiko/taiko-hoodi-testnet>:goldsky`
