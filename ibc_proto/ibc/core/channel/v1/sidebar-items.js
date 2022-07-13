initSidebarItems({"enum":[["Order","Order defines if a channel is ORDERED or UNORDERED"],["ResponseResultType","ResponseResultType defines the possible outcomes of the execution of a message"],["State","State defines if a channel is in one of the following states: CLOSED, INIT, TRYOPEN, OPEN or UNINITIALIZED."]],"mod":[["acknowledgement","Nested message and enum types in `Acknowledgement`."],["msg_client","Generated client implementations."],["query_client","Generated client implementations."]],"struct":[["Acknowledgement","Acknowledgement is the recommended acknowledgement format to be used by app-specific protocols. NOTE: The field numbers 21 and 22 were explicitly chosen to avoid accidental conflicts with other protobuf message formats used for acknowledgements. The first byte of any message with this format will be the non-ASCII values `0xaa` (result) or `0xb2` (error). Implemented as defined by ICS: https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#acknowledgement-envelope"],["Channel","Channel defines pipeline for exactly-once packet delivery between specific modules on separate blockchains, which has at least one end capable of sending packets and one end capable of receiving packets."],["Counterparty","Counterparty defines a channel end counterparty"],["GenesisState","GenesisState defines the ibc channel submodule’s genesis state."],["IdentifiedChannel","IdentifiedChannel defines a channel with additional port and channel identifier fields."],["MsgAcknowledgement","MsgAcknowledgement receives incoming IBC acknowledgement"],["MsgAcknowledgementResponse","MsgAcknowledgementResponse defines the Msg/Acknowledgement response type."],["MsgChannelCloseConfirm","MsgChannelCloseConfirm defines a msg sent by a Relayer to Chain B to acknowledge the change of channel state to CLOSED on Chain A."],["MsgChannelCloseConfirmResponse","MsgChannelCloseConfirmResponse defines the Msg/ChannelCloseConfirm response type."],["MsgChannelCloseInit","MsgChannelCloseInit defines a msg sent by a Relayer to Chain A to close a channel with Chain B."],["MsgChannelCloseInitResponse","MsgChannelCloseInitResponse defines the Msg/ChannelCloseInit response type."],["MsgChannelOpenAck","MsgChannelOpenAck defines a msg sent by a Relayer to Chain A to acknowledge the change of channel state to TRYOPEN on Chain B."],["MsgChannelOpenAckResponse","MsgChannelOpenAckResponse defines the Msg/ChannelOpenAck response type."],["MsgChannelOpenConfirm","MsgChannelOpenConfirm defines a msg sent by a Relayer to Chain B to acknowledge the change of channel state to OPEN on Chain A."],["MsgChannelOpenConfirmResponse","MsgChannelOpenConfirmResponse defines the Msg/ChannelOpenConfirm response type."],["MsgChannelOpenInit","MsgChannelOpenInit defines an sdk.Msg to initialize a channel handshake. It is called by a relayer on Chain A."],["MsgChannelOpenInitResponse","MsgChannelOpenInitResponse defines the Msg/ChannelOpenInit response type."],["MsgChannelOpenTry","MsgChannelOpenInit defines a msg sent by a Relayer to try to open a channel on Chain B. The version field within the Channel field has been deprecated. Its value will be ignored by core IBC."],["MsgChannelOpenTryResponse","MsgChannelOpenTryResponse defines the Msg/ChannelOpenTry response type."],["MsgRecvPacket","MsgRecvPacket receives incoming IBC packet"],["MsgRecvPacketResponse","MsgRecvPacketResponse defines the Msg/RecvPacket response type."],["MsgTimeout","MsgTimeout receives timed-out packet"],["MsgTimeoutOnClose","MsgTimeoutOnClose timed-out packet upon counterparty channel closure."],["MsgTimeoutOnCloseResponse","MsgTimeoutOnCloseResponse defines the Msg/TimeoutOnClose response type."],["MsgTimeoutResponse","MsgTimeoutResponse defines the Msg/Timeout response type."],["Packet","Packet defines a type that carries data across different chains through IBC"],["PacketId","PacketId is an identifer for a unique Packet Source chains refer to packets by source port/channel Destination chains refer to packets by destination port/channel"],["PacketSequence","PacketSequence defines the genesis type necessary to retrieve and store next send and receive sequences."],["PacketState","PacketState defines the generic type necessary to retrieve and store packet commitments, acknowledgements, and receipts. Caller is responsible for knowing the context necessary to interpret this state as a commitment, acknowledgement, or a receipt."],["QueryChannelClientStateRequest","QueryChannelClientStateRequest is the request type for the Query/ClientState RPC method"],["QueryChannelClientStateResponse","QueryChannelClientStateResponse is the Response type for the Query/QueryChannelClientState RPC method"],["QueryChannelConsensusStateRequest","QueryChannelConsensusStateRequest is the request type for the Query/ConsensusState RPC method"],["QueryChannelConsensusStateResponse","QueryChannelClientStateResponse is the Response type for the Query/QueryChannelClientState RPC method"],["QueryChannelRequest","QueryChannelRequest is the request type for the Query/Channel RPC method"],["QueryChannelResponse","QueryChannelResponse is the response type for the Query/Channel RPC method. Besides the Channel end, it includes a proof and the height from which the proof was retrieved."],["QueryChannelsRequest","QueryChannelsRequest is the request type for the Query/Channels RPC method"],["QueryChannelsResponse","QueryChannelsResponse is the response type for the Query/Channels RPC method."],["QueryConnectionChannelsRequest","QueryConnectionChannelsRequest is the request type for the Query/QueryConnectionChannels RPC method"],["QueryConnectionChannelsResponse","QueryConnectionChannelsResponse is the Response type for the Query/QueryConnectionChannels RPC method"],["QueryNextSequenceReceiveRequest","QueryNextSequenceReceiveRequest is the request type for the Query/QueryNextSequenceReceiveRequest RPC method"],["QueryNextSequenceReceiveResponse","QuerySequenceResponse is the request type for the Query/QueryNextSequenceReceiveResponse RPC method"],["QueryPacketAcknowledgementRequest","QueryPacketAcknowledgementRequest is the request type for the Query/PacketAcknowledgement RPC method"],["QueryPacketAcknowledgementResponse","QueryPacketAcknowledgementResponse defines the client query response for a packet which also includes a proof and the height from which the proof was retrieved"],["QueryPacketAcknowledgementsRequest","QueryPacketAcknowledgementsRequest is the request type for the Query/QueryPacketCommitments RPC method"],["QueryPacketAcknowledgementsResponse","QueryPacketAcknowledgemetsResponse is the request type for the Query/QueryPacketAcknowledgements RPC method"],["QueryPacketCommitmentRequest","QueryPacketCommitmentRequest is the request type for the Query/PacketCommitment RPC method"],["QueryPacketCommitmentResponse","QueryPacketCommitmentResponse defines the client query response for a packet which also includes a proof and the height from which the proof was retrieved"],["QueryPacketCommitmentsRequest","QueryPacketCommitmentsRequest is the request type for the Query/QueryPacketCommitments RPC method"],["QueryPacketCommitmentsResponse","QueryPacketCommitmentsResponse is the request type for the Query/QueryPacketCommitments RPC method"],["QueryPacketReceiptRequest","QueryPacketReceiptRequest is the request type for the Query/PacketReceipt RPC method"],["QueryPacketReceiptResponse","QueryPacketReceiptResponse defines the client query response for a packet receipt which also includes a proof, and the height from which the proof was retrieved"],["QueryUnreceivedAcksRequest","QueryUnreceivedAcks is the request type for the Query/UnreceivedAcks RPC method"],["QueryUnreceivedAcksResponse","QueryUnreceivedAcksResponse is the response type for the Query/UnreceivedAcks RPC method"],["QueryUnreceivedPacketsRequest","QueryUnreceivedPacketsRequest is the request type for the Query/UnreceivedPackets RPC method"],["QueryUnreceivedPacketsResponse","QueryUnreceivedPacketsResponse is the response type for the Query/UnreceivedPacketCommitments RPC method"]]});