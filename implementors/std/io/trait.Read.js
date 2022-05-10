(function() {var implementors = {};
implementors["base64"] = [{"text":"impl&lt;'a, R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"base64/read/struct.DecoderReader.html\" title=\"struct base64::read::DecoderReader\">DecoderReader</a>&lt;'a, R&gt;","synthetic":false,"types":["base64::read::decoder::DecoderReader"]}];
implementors["brotli"] = [{"text":"impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>, BufferType:&nbsp;<a class=\"trait\" href=\"brotli/writer/trait.SliceWrapperMut.html\" title=\"trait brotli::writer::SliceWrapperMut\">SliceWrapperMut</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.u8.html\">u8</a>&gt;, Alloc:&nbsp;<a class=\"trait\" href=\"brotli/enc/combined_alloc/trait.BrotliAlloc.html\" title=\"trait brotli::enc::combined_alloc::BrotliAlloc\">BrotliAlloc</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"brotli/enc/reader/struct.CompressorReaderCustomAlloc.html\" title=\"struct brotli::enc::reader::CompressorReaderCustomAlloc\">CompressorReaderCustomAlloc</a>&lt;R, BufferType, Alloc&gt;","synthetic":false,"types":["brotli::enc::reader::CompressorReaderCustomAlloc"]},{"text":"impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"brotli/enc/reader/struct.CompressorReader.html\" title=\"struct brotli::enc::reader::CompressorReader\">CompressorReader</a>&lt;R&gt;","synthetic":false,"types":["brotli::enc::reader::CompressorReader"]}];
implementors["brotli_decompressor"] = [{"text":"impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>, BufferType:&nbsp;<a class=\"trait\" href=\"brotli_decompressor/trait.SliceWrapperMut.html\" title=\"trait brotli_decompressor::SliceWrapperMut\">SliceWrapperMut</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.u8.html\">u8</a>&gt;, AllocU8:&nbsp;<a class=\"trait\" href=\"brotli_decompressor/trait.Allocator.html\" title=\"trait brotli_decompressor::Allocator\">Allocator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.u8.html\">u8</a>&gt;, AllocU32:&nbsp;<a class=\"trait\" href=\"brotli_decompressor/trait.Allocator.html\" title=\"trait brotli_decompressor::Allocator\">Allocator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.u32.html\">u32</a>&gt;, AllocHC:&nbsp;<a class=\"trait\" href=\"brotli_decompressor/trait.Allocator.html\" title=\"trait brotli_decompressor::Allocator\">Allocator</a>&lt;<a class=\"struct\" href=\"brotli_decompressor/reader/struct.HuffmanCode.html\" title=\"struct brotli_decompressor::reader::HuffmanCode\">HuffmanCode</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"brotli_decompressor/reader/struct.DecompressorCustomAlloc.html\" title=\"struct brotli_decompressor::reader::DecompressorCustomAlloc\">DecompressorCustomAlloc</a>&lt;R, BufferType, AllocU8, AllocU32, AllocHC&gt;","synthetic":false,"types":["brotli_decompressor::reader::DecompressorCustomAlloc"]},{"text":"impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"brotli_decompressor/reader/struct.Decompressor.html\" title=\"struct brotli_decompressor::reader::Decompressor\">Decompressor</a>&lt;R&gt;","synthetic":false,"types":["brotli_decompressor::reader::Decompressor"]}];
implementors["buf_redux"] = [{"text":"impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>, P:&nbsp;<a class=\"trait\" href=\"buf_redux/policy/trait.ReaderPolicy.html\" title=\"trait buf_redux::policy::ReaderPolicy\">ReaderPolicy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"buf_redux/struct.BufReader.html\" title=\"struct buf_redux::BufReader\">BufReader</a>&lt;R, P&gt;","synthetic":false,"types":["buf_redux::BufReader"]},{"text":"impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"buf_redux/struct.Unbuffer.html\" title=\"struct buf_redux::Unbuffer\">Unbuffer</a>&lt;R&gt;","synthetic":false,"types":["buf_redux::Unbuffer"]}];
implementors["bytes"] = [{"text":"impl&lt;B:&nbsp;<a class=\"trait\" href=\"bytes/buf/trait.Buf.html\" title=\"trait bytes::buf::Buf\">Buf</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"bytes/buf/struct.Reader.html\" title=\"struct bytes::buf::Reader\">Reader</a>&lt;B&gt;","synthetic":false,"types":["bytes::buf::reader::Reader"]}];
implementors["chunked_transfer"] = [{"text":"impl&lt;R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"chunked_transfer/struct.Decoder.html\" title=\"struct chunked_transfer::Decoder\">Decoder</a>&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,&nbsp;</span>","synthetic":false,"types":["chunked_transfer::decoder::Decoder"]}];
implementors["console"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"console/struct.Term.html\" title=\"struct console::Term\">Term</a>","synthetic":false,"types":["console::term::Term"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;'a <a class=\"struct\" href=\"console/struct.Term.html\" title=\"struct console::Term\">Term</a>","synthetic":false,"types":["console::term::Term"]}];
implementors["digest"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"digest/core_api/struct.XofReaderCoreWrapper.html\" title=\"struct digest::core_api::XofReaderCoreWrapper\">XofReaderCoreWrapper</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"digest/core_api/trait.XofReaderCore.html\" title=\"trait digest::core_api::XofReaderCore\">XofReaderCore</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"associatedtype\" href=\"digest/core_api/trait.BlockSizeUser.html#associatedtype.BlockSize\" title=\"type digest::core_api::BlockSizeUser::BlockSize\">BlockSize</a>: <a class=\"trait\" href=\"typenum/type_operators/trait.IsLess.html\" title=\"trait typenum::type_operators::IsLess\">IsLess</a>&lt;<a class=\"type\" href=\"digest/consts/type.U256.html\" title=\"type digest::consts::U256\">U256</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"typenum/operator_aliases/type.Le.html\" title=\"type typenum::operator_aliases::Le\">Le</a>&lt;T::<a class=\"associatedtype\" href=\"digest/core_api/trait.BlockSizeUser.html#associatedtype.BlockSize\" title=\"type digest::core_api::BlockSizeUser::BlockSize\">BlockSize</a>, <a class=\"type\" href=\"digest/consts/type.U256.html\" title=\"type digest::consts::U256\">U256</a>&gt;: <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>,&nbsp;</span>","synthetic":false,"types":["digest::core_api::xof_reader::XofReaderCoreWrapper"]}];
implementors["fs_err"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"fs_err/struct.File.html\" title=\"struct fs_err::File\">File</a>","synthetic":false,"types":["fs_err::file::File"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;'a <a class=\"struct\" href=\"fs_err/struct.File.html\" title=\"struct fs_err::File\">File</a>","synthetic":false,"types":["fs_err::file::File"]}];
implementors["futures_util"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"futures_util/io/struct.AllowStdIo.html\" title=\"struct futures_util::io::AllowStdIo\">AllowStdIo</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,&nbsp;</span>","synthetic":false,"types":["futures_util::io::allow_std::AllowStdIo"]}];
implementors["gzip_header"] = [{"text":"impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"gzip_header/struct.CrcReader.html\" title=\"struct gzip_header::CrcReader\">CrcReader</a>&lt;R&gt;","synthetic":false,"types":["gzip_header::crc_reader::CrcReader"]}];
implementors["mio"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"mio/unix/pipe/struct.Receiver.html\" title=\"struct mio::unix::pipe::Receiver\">Receiver</a>","synthetic":false,"types":["mio::sys::unix::pipe::Receiver"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;<a class=\"struct\" href=\"mio/unix/pipe/struct.Receiver.html\" title=\"struct mio::unix::pipe::Receiver\">Receiver</a>","synthetic":false,"types":["mio::sys::unix::pipe::Receiver"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"mio/net/struct.TcpStream.html\" title=\"struct mio::net::TcpStream\">TcpStream</a>","synthetic":false,"types":["mio::net::tcp::stream::TcpStream"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;'a <a class=\"struct\" href=\"mio/net/struct.TcpStream.html\" title=\"struct mio::net::TcpStream\">TcpStream</a>","synthetic":false,"types":["mio::net::tcp::stream::TcpStream"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"mio/net/struct.UnixStream.html\" title=\"struct mio::net::UnixStream\">UnixStream</a>","synthetic":false,"types":["mio::net::uds::stream::UnixStream"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;'a <a class=\"struct\" href=\"mio/net/struct.UnixStream.html\" title=\"struct mio::net::UnixStream\">UnixStream</a>","synthetic":false,"types":["mio::net::uds::stream::UnixStream"]}];
implementors["multipart"] = [{"text":"impl&lt;M:&nbsp;<a class=\"trait\" href=\"multipart/server/trait.ReadEntry.html\" title=\"trait multipart::server::ReadEntry\">ReadEntry</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"multipart/server/struct.MultipartData.html\" title=\"struct multipart::server::MultipartData\">MultipartData</a>&lt;M&gt;","synthetic":false,"types":["multipart::server::field::MultipartData"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"enum\" href=\"multipart/server/save/enum.DataReader.html\" title=\"enum multipart::server::save::DataReader\">DataReader</a>&lt;'a&gt;","synthetic":false,"types":["multipart::server::save::DataReader"]}];
implementors["protobuf"] = [{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"protobuf/struct.CodedInputStream.html\" title=\"struct protobuf::CodedInputStream\">CodedInputStream</a>&lt;'a&gt;","synthetic":false,"types":["protobuf::coded_input_stream::CodedInputStream"]}];
implementors["rand_core"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for dyn <a class=\"trait\" href=\"rand_core/trait.RngCore.html\" title=\"trait rand_core::RngCore\">RngCore</a>","synthetic":false,"types":[]}];
implementors["rouille"] = [{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"rouille/struct.RequestBody.html\" title=\"struct rouille::RequestBody\">RequestBody</a>&lt;'a&gt;","synthetic":false,"types":["rouille::RequestBody"]}];
implementors["rustls"] = [{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"rustls/struct.Reader.html\" title=\"struct rustls::Reader\">Reader</a>&lt;'a&gt;","synthetic":false,"types":["rustls::conn::Reader"]},{"text":"impl&lt;'a, C, T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"rustls/struct.Stream.html\" title=\"struct rustls::Stream\">Stream</a>&lt;'a, C, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: 'a + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a>&lt;Target = <a class=\"struct\" href=\"rustls/struct.ConnectionCommon.html\" title=\"struct rustls::ConnectionCommon\">ConnectionCommon</a>&lt;S&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: 'a + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"rustls/trait.SideData.html\" title=\"trait rustls::SideData\">SideData</a>,&nbsp;</span>","synthetic":false,"types":["rustls::stream::Stream"]},{"text":"impl&lt;C, T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"rustls/struct.StreamOwned.html\" title=\"struct rustls::StreamOwned\">StreamOwned</a>&lt;C, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a>&lt;Target = <a class=\"struct\" href=\"rustls/struct.ConnectionCommon.html\" title=\"struct rustls::ConnectionCommon\">ConnectionCommon</a>&lt;S&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"rustls/trait.SideData.html\" title=\"trait rustls::SideData\">SideData</a>,&nbsp;</span>","synthetic":false,"types":["rustls::stream::StreamOwned"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"rustls/server/struct.ReadEarlyData.html\" title=\"struct rustls::server::ReadEarlyData\">ReadEarlyData</a>&lt;'a&gt;","synthetic":false,"types":["rustls::server::server_conn::ReadEarlyData"]}];
implementors["socket2"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"socket2/struct.Socket.html\" title=\"struct socket2::Socket\">Socket</a>","synthetic":false,"types":["socket2::socket::Socket"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;'a <a class=\"struct\" href=\"socket2/struct.Socket.html\" title=\"struct socket2::Socket\">Socket</a>","synthetic":false,"types":["socket2::socket::Socket"]}];
implementors["tempfile"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"tempfile/struct.NamedTempFile.html\" title=\"struct tempfile::NamedTempFile\">NamedTempFile</a>","synthetic":false,"types":["tempfile::file::NamedTempFile"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;'a <a class=\"struct\" href=\"tempfile/struct.NamedTempFile.html\" title=\"struct tempfile::NamedTempFile\">NamedTempFile</a>","synthetic":false,"types":["tempfile::file::NamedTempFile"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"tempfile/struct.SpooledTempFile.html\" title=\"struct tempfile::SpooledTempFile\">SpooledTempFile</a>","synthetic":false,"types":["tempfile::spooled::SpooledTempFile"]}];
implementors["tungstenite"] = [{"text":"impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"enum\" href=\"tungstenite/stream/enum.Stream.html\" title=\"enum tungstenite::stream::Stream\">Stream</a>&lt;S, T&gt;","synthetic":false,"types":["tungstenite::stream::Stream"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()