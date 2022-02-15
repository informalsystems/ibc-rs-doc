initSidebarItems({"enum":[["DataType","DataType defines the type of solo machine proof being created. This is done to preserve uniqueness of different data sign byte encodings."]],"struct":[["ChannelStateData","ChannelStateData returns the SignBytes data for channel state verification."],["ClientState","ClientState defines a solo machine client that tracks the current consensus state and if the client is frozen."],["ClientStateData","ClientStateData returns the SignBytes data for client state verification."],["ConnectionStateData","ConnectionStateData returns the SignBytes data for connection state verification."],["ConsensusState","ConsensusState defines a solo machine consensus state. The sequence of a consensus state is contained in the “height” key used in storing the consensus state."],["ConsensusStateData","ConsensusStateData returns the SignBytes data for consensus state verification."],["Header","Header defines a solo machine consensus header"],["HeaderData","HeaderData returns the SignBytes data for update verification."],["Misbehaviour","Misbehaviour defines misbehaviour for a solo machine which consists of a sequence and two signatures over different messages at that sequence."],["NextSequenceRecvData","NextSequenceRecvData returns the SignBytes data for verification of the next sequence to be received."],["PacketAcknowledgementData","PacketAcknowledgementData returns the SignBytes data for acknowledgement verification."],["PacketCommitmentData","PacketCommitmentData returns the SignBytes data for packet commitment verification."],["PacketReceiptAbsenceData","PacketReceiptAbsenceData returns the SignBytes data for packet receipt absence verification."],["SignBytes","SignBytes defines the signed bytes used for signature verification."],["SignatureAndData","SignatureAndData contains a signature and the data signed over to create that signature."],["TimestampedSignatureData","TimestampedSignatureData contains the signature data and the timestamp of the signature."]]});