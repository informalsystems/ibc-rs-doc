initSidebarItems({"enum":[["BytesRejection","Rejection used for `Bytes`."],["ContentLengthLimitRejection","Rejection used for `ContentLengthLimit`."],["ExtensionRejection","Rejection used for `Extension`."],["FormRejection","Rejection used for `Form`."],["HostRejection","Rejection used for `Host`."],["PathRejection","Rejection used for `Path`."],["QueryRejection","Rejection used for `Query`."],["StringRejection","Rejection used for [`String`]."]],"struct":[["BodyAlreadyExtracted","Rejection type used if you try and extract the request body more than once."],["FailedToBufferBody","Rejection type for extractors that buffer the request body. Used if the request body cannot be buffered due to an error."],["FailedToDeserializeQueryString","Rejection type for extractors that deserialize query strings if the input couldn’t be deserialized into the target type."],["FailedToResolveHost","Rejection type used if the `Host` extractor is unable to resolve a host."],["InvalidFormContentType","Rejection type used if you try and extract the request more than once."],["InvalidUtf8","Rejection type used when buffering the request into a [`String`] if the body doesn’t contain valid UTF-8."],["LengthRequired","Rejection type for `ContentLengthLimit` if the request is missing the `Content-Length` header or it is invalid."],["MissingExtension","Rejection type for `Extension` if an expected request extension was not found."],["MissingPathParams","Rejection type used if axum’s internal representation of path parameters is missing. This is commonly caused by extracting `Request<_>`. `Path` must be extracted first."],["PayloadTooLarge","Rejection type for `ContentLengthLimit` if the request body is too large."]]});