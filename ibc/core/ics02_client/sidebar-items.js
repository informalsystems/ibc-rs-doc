initSidebarItems({"mod":[["client_consensus",""],["client_def",""],["client_state",""],["client_type",""],["context","ICS2 (client) context. The two traits `ClientReader` and `ClientKeeper` define the interface that any host chain must implement to be able to process any `ClientMsg`. See “ADR 003: IBC protocol implementation” for more details."],["error",""],["events","Types for the IBC events emitted from Tendermint Websocket by the client module."],["handler","This module implements the processing logic for ICS2 (client abstractions and functions) msgs."],["header",""],["height",""],["misbehaviour",""],["msgs","These are definitions of messages that a relayer submits to a chain. Specific implementations of these messages can be found, for instance, in ICS 07 for Tendermint-specific chains. A chain handles these messages in two layers: first with the general ICS 02 client handler, which subsequently calls into the chain-specific (e.g., ICS 07) client handler. See: https://github.com/cosmos/ibc/tree/master/spec/core/ics-002-client-semantics#create."],["trust_threshold","IBC Domain type definition for [`TrustThreshold`] represented as a fraction with valid values in the range `[0, 1)`."]]});