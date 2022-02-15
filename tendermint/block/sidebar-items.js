initSidebarItems({"mod":[["commit_sig","CommitSig within Commit"],["header","Block headers"],["parts","Block parts"],["signed_header","SignedHeader contains commit and and block header. It is what the rpc endpoint /commit returns and hence can be used by a light client."]],"struct":[["Block","Blocks consist of a header, transactions, votes (the commit), and a list of evidence of malfeasance (i.e. signing conflicting votes)."],["Commit","Commit contains the justification (ie. a set of signatures) that a block was committed by a set of validators. TODO: Update links below! https://github.com/tendermint/tendermint/blob/51dc810d041eaac78320adc6d53ad8b160b06601/types/block.go#L486-L502 https://github.com/tendermint/spec/blob/d46cd7f573a2c6a2399fcab2cde981330aa63f37/spec/core/data_structures.md#lastcommit"],["Height","Block height for a particular chain (i.e. number of blocks created since the chain began)"],["Id","Block identifiers which contain two distinct Merkle roots of the block, as well as the number of parts in the block."],["Meta","Block metadata - Todo: implement constructor and getters"],["Round","Block round for a particular chain"],["Size","Block size parameters"]],"trait":[["ParseHeight","Parse `block::Height` from a type"],["ParseId","Parse `block::Id` from a type"]]});