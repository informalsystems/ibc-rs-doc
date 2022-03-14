(function() {var implementors = {};
implementors["crossbeam_epoch"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"crossbeam_epoch/struct.Atomic.html\" title=\"struct crossbeam_epoch::Atomic\">Atomic</a>&lt;T&gt;","synthetic":false,"types":["crossbeam_epoch::atomic::Atomic"]},{"text":"impl&lt;'g, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"crossbeam_epoch/struct.Shared.html\" title=\"struct crossbeam_epoch::Shared\">Shared</a>&lt;'g, T&gt;","synthetic":false,"types":["crossbeam_epoch::atomic::Shared"]}];
implementors["env_logger"] = [{"text":"impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"env_logger/fmt/struct.StyledValue.html\" title=\"struct env_logger::fmt::StyledValue\">StyledValue</a>&lt;'a, T&gt;","synthetic":false,"types":["env_logger::fmt::writer::termcolor::imp::StyledValue"]}];
implementors["itertools"] = [{"text":"impl&lt;'a, I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"itertools/structs/struct.Format.html\" title=\"struct itertools::structs::Format\">Format</a>&lt;'a, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;I::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.59.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item\" title=\"type core::iter::traits::iterator::Iterator::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a>,&nbsp;</span>","synthetic":false,"types":["itertools::format::Format"]}];
implementors["owo_colors"] = [{"text":"impl&lt;'a, Color:&nbsp;<a class=\"trait\" href=\"owo_colors/trait.Color.html\" title=\"trait owo_colors::Color\">Color</a>, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"owo_colors/struct.FgColorDisplay.html\" title=\"struct owo_colors::FgColorDisplay\">FgColorDisplay</a>&lt;'a, Color, T&gt;","synthetic":false,"types":["owo_colors::FgColorDisplay"]},{"text":"impl&lt;'a, Color:&nbsp;<a class=\"trait\" href=\"owo_colors/trait.Color.html\" title=\"trait owo_colors::Color\">Color</a>, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"owo_colors/struct.BgColorDisplay.html\" title=\"struct owo_colors::BgColorDisplay\">BgColorDisplay</a>&lt;'a, Color, T&gt;","synthetic":false,"types":["owo_colors::BgColorDisplay"]},{"text":"impl&lt;'a, Color:&nbsp;<a class=\"trait\" href=\"owo_colors/trait.DynColor.html\" title=\"trait owo_colors::DynColor\">DynColor</a>, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"owo_colors/struct.FgDynColorDisplay.html\" title=\"struct owo_colors::FgDynColorDisplay\">FgDynColorDisplay</a>&lt;'a, Color, T&gt;","synthetic":false,"types":["owo_colors::FgDynColorDisplay"]},{"text":"impl&lt;'a, Color:&nbsp;<a class=\"trait\" href=\"owo_colors/trait.DynColor.html\" title=\"trait owo_colors::DynColor\">DynColor</a>, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"owo_colors/struct.BgDynColorDisplay.html\" title=\"struct owo_colors::BgDynColorDisplay\">BgDynColorDisplay</a>&lt;'a, Color, T&gt;","synthetic":false,"types":["owo_colors::BgDynColorDisplay"]},{"text":"impl&lt;'a, Fg:&nbsp;<a class=\"trait\" href=\"owo_colors/trait.Color.html\" title=\"trait owo_colors::Color\">Color</a>, Bg:&nbsp;<a class=\"trait\" href=\"owo_colors/trait.Color.html\" title=\"trait owo_colors::Color\">Color</a>, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"owo_colors/struct.ComboColorDisplay.html\" title=\"struct owo_colors::ComboColorDisplay\">ComboColorDisplay</a>&lt;'a, Fg, Bg, T&gt;","synthetic":false,"types":["owo_colors::combo::ComboColorDisplay"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"owo_colors/struct.Styled.html\" title=\"struct owo_colors::Styled\">Styled</a>&lt;T&gt;","synthetic":false,"types":["owo_colors::dyn_styles::Styled"]},{"text":"impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"owo_colors/styles/struct.BoldDisplay.html\" title=\"struct owo_colors::styles::BoldDisplay\">BoldDisplay</a>&lt;'a, T&gt;","synthetic":false,"types":["owo_colors::styles::BoldDisplay"]},{"text":"impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"owo_colors/styles/struct.DimDisplay.html\" title=\"struct owo_colors::styles::DimDisplay\">DimDisplay</a>&lt;'a, T&gt;","synthetic":false,"types":["owo_colors::styles::DimDisplay"]},{"text":"impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"owo_colors/styles/struct.ItalicDisplay.html\" title=\"struct owo_colors::styles::ItalicDisplay\">ItalicDisplay</a>&lt;'a, T&gt;","synthetic":false,"types":["owo_colors::styles::ItalicDisplay"]},{"text":"impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"owo_colors/styles/struct.UnderlineDisplay.html\" title=\"struct owo_colors::styles::UnderlineDisplay\">UnderlineDisplay</a>&lt;'a, T&gt;","synthetic":false,"types":["owo_colors::styles::UnderlineDisplay"]},{"text":"impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"owo_colors/styles/struct.BlinkDisplay.html\" title=\"struct owo_colors::styles::BlinkDisplay\">BlinkDisplay</a>&lt;'a, T&gt;","synthetic":false,"types":["owo_colors::styles::BlinkDisplay"]},{"text":"impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"owo_colors/styles/struct.BlinkFastDisplay.html\" title=\"struct owo_colors::styles::BlinkFastDisplay\">BlinkFastDisplay</a>&lt;'a, T&gt;","synthetic":false,"types":["owo_colors::styles::BlinkFastDisplay"]},{"text":"impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"owo_colors/styles/struct.ReversedDisplay.html\" title=\"struct owo_colors::styles::ReversedDisplay\">ReversedDisplay</a>&lt;'a, T&gt;","synthetic":false,"types":["owo_colors::styles::ReversedDisplay"]},{"text":"impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"owo_colors/styles/struct.HiddenDisplay.html\" title=\"struct owo_colors::styles::HiddenDisplay\">HiddenDisplay</a>&lt;'a, T&gt;","synthetic":false,"types":["owo_colors::styles::HiddenDisplay"]},{"text":"impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"owo_colors/styles/struct.StrikeThroughDisplay.html\" title=\"struct owo_colors::styles::StrikeThroughDisplay\">StrikeThroughDisplay</a>&lt;'a, T&gt;","synthetic":false,"types":["owo_colors::styles::StrikeThroughDisplay"]}];
implementors["tagptr"] = [{"text":"impl&lt;T, const N:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"tagptr/struct.AtomicTagPtr.html\" title=\"struct tagptr::AtomicTagPtr\">AtomicTagPtr</a>&lt;T, N&gt;","synthetic":false,"types":["tagptr::AtomicTagPtr"]},{"text":"impl&lt;T, const N:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"tagptr/struct.TagNonNull.html\" title=\"struct tagptr::TagNonNull\">TagNonNull</a>&lt;T, N&gt;","synthetic":false,"types":["tagptr::TagNonNull"]},{"text":"impl&lt;T, const N:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"tagptr/struct.TagPtr.html\" title=\"struct tagptr::TagPtr\">TagPtr</a>&lt;T, N&gt;","synthetic":false,"types":["tagptr::TagPtr"]}];
implementors["tinyvec"] = [{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"tinyvec/struct.ArrayVec.html\" title=\"struct tinyvec::ArrayVec\">ArrayVec</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::<a class=\"associatedtype\" href=\"tinyvec/trait.Array.html#associatedtype.Item\" title=\"type tinyvec::Array::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a>,&nbsp;</span>","synthetic":false,"types":["tinyvec::arrayvec::ArrayVec"]},{"text":"impl&lt;'s, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"tinyvec/struct.SliceVec.html\" title=\"struct tinyvec::SliceVec\">SliceVec</a>&lt;'s, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a>,&nbsp;</span>","synthetic":false,"types":["tinyvec::slicevec::SliceVec"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"enum\" href=\"tinyvec/enum.TinyVec.html\" title=\"enum tinyvec::TinyVec\">TinyVec</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::<a class=\"associatedtype\" href=\"tinyvec/trait.Array.html#associatedtype.Item\" title=\"type tinyvec::Array::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a>,&nbsp;</span>","synthetic":false,"types":["tinyvec::tinyvec::TinyVec"]}];
implementors["triomphe"] = [{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"triomphe/struct.Arc.html\" title=\"struct triomphe::Arc\">Arc</a>&lt;T&gt;","synthetic":false,"types":["triomphe::arc::Arc"]},{"text":"impl&lt;H, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"triomphe/struct.ThinArc.html\" title=\"struct triomphe::ThinArc\">ThinArc</a>&lt;H, T&gt;","synthetic":false,"types":["triomphe::thin_arc::ThinArc"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()