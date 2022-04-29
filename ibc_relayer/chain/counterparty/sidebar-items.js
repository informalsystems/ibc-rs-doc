initSidebarItems({"fn":[["acknowledgements_on_chain",""],["channel_connection_client","Returns the [`ChannelConnectionClient`] associated with the provided port and channel id."],["channel_on_destination",""],["channel_state_on_destination",""],["check_channel_counterparty","Queries a channel end on a [`ChainHandle`], and verifies that the counterparty field on that channel end matches an expected counterparty. Returns `Ok` if the counterparty matches, and `Err` otherwise."],["commitments_on_chain","Returns the sequences of the packet commitments on a given chain and channel (port_id + channel_id). These are the sequences of the packets that were either:"],["connection_state_on_destination",""],["counterparty_chain_from_channel",""],["counterparty_chain_from_connection",""],["packet_acknowledgements","Returns the sequences of the written acknowledgments on a given chain and channel (port_id + channel_id), out of the commitments still present on the counterparty chain."],["pending_packet_summary",""],["unreceived_acknowledgements","This method returns a vector of sequence numbers for those packets which the counterparty chain received on the given channel and which the (target) chain did not yet acknowledge. Expects an [`IdentifiedChannelEnd`] plus a pair of [`ChainHandle`]s representing the chains at the two ends of this channel, called a (target) chain and a counterparty chain."],["unreceived_acknowledgements_sequences","Returns the sequences of the packets that were sent on the chain and for which:"],["unreceived_packets","This method returns a vector of sequence numbers for all the packets which the counterparty chain sent on the given channel and which the (target) chain did not yet receive. Expects an [`IdentifiedChannelEnd`] plus a pair of [`ChainHandle`]s representing the chains at the two ends of this channel, called a (target) chain and a counterparty chain."],["unreceived_packets_sequences","Returns the sequences of the packets that were sent on the counterparty chain but for which `MsgRecvPacket`-s have not been received on a given chain and channel (port_id + channel_id)"]],"struct":[["ChannelConnectionClient",""],["PendingPackets","A structure to display pending packet commitment IDs at one end of a channel."]]});