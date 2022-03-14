initSidebarItems({"fn":[["assert_alignment","Asserts that the alignment of `U` is large enough so a pointer to an instance may store `N` tag bits."],["has_sufficient_alignment","Returns `true` if the alignment of `T` is large enough so a pointer to an instance may store the given number of `tag_bits`."]],"struct":[["AtomicTagPtr","A raw pointer type which can be safely shared between threads and which can use up to `N` of its lower bits to store additional information (the tag)."],["Null","A type representing a `null` pointer with potential tag bits."],["TagNonNull","A non-nullable tagged raw pointer type similar to [`NonNull`] which can use up to `N` of its lower bits to store additional information (the tag)."],["TagPtr","A raw, unsafe pointer type like `*mut T` which can use up to `N` of its lower bits to store additional information (the tag)."]]});