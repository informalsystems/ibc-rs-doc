initSidebarItems({"enum":[["SpanKind","`SpanKind` describes the relationship between the Span, its parents, and its children in a `Trace`. `SpanKind` describes two independent properties that benefit tracing systems during analysis."],["StatusCode","The `StatusCode` interface represents the status of a finished `Span`. It’s composed of a canonical code in conjunction with an optional descriptive message."],["TraceError","Errors returned by the trace API."],["TraceStateError","Error returned by `TraceState` operations."]],"fn":[["get_active_span","Executes a closure with a reference to this thread’s current span."],["mark_span_as_active","Mark a given `Span` as active."]],"mod":[["noop","No-op trace impls"]],"struct":[["Event","A `Span` has the ability to add events. Events have a time associated with the moment when they are added to the `Span`."],["Link","During the `Span` creation user MUST have the ability to record links to other `Span`s. Linked `Span`s can be from the same or a different trace."],["SpanBuilder","`SpanBuilder` allows span attributes to be configured before the span has started."],["SpanContext","Immutable portion of a `Span` which can be serialized and propagated."],["SpanId","An 8-byte value which identifies a given span."],["SpanRef","A reference to the currently active span in this context."],["TraceFlags","Flags that can be set on a [`SpanContext`]."],["TraceId","A 16-byte value which identifies a given trace."],["TraceState","TraceState carries system-specific configuration data, represented as a list of key-value pairs. TraceState allows multiple tracing systems to participate in the same trace."]],"trait":[["FutureExt","Extension trait allowing futures, streams, and sinks to be traced with a span."],["IdGenerator","Interface for generating IDs"],["Span","Interface for a single operation within a trace."],["TraceContextExt","Methods for storing and retrieving trace data in a context."],["Tracer","Interface for constructing `Span`s."],["TracerProvider","Types that can create instances of [`Tracer`]."]],"type":[["TraceResult","Describe the result of operations in tracing API."]]});