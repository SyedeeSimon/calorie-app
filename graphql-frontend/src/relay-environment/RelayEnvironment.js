import {Environment, Network, Store, RecordSource} from 'relay-runtime';

import fetchGraphQL from './fetchGraphQL'

async function fetchRelay(params, variables) {
    console.log('params', params);
    console.log('variables', variables);
    return fetchGraphQL(params.text, variables);
}

export default new Environment({
    network: Network.create(fetchRelay),
    store: new Store(new RecordSource()),
});