(function() {var implementors = {};
implementors["ecdsa"] = [{"text":"impl&lt;C&gt; <a class=\"trait\" href=\"signature/signer/trait.Signer.html\" title=\"trait signature::signer::Signer\">Signer</a>&lt;<a class=\"struct\" href=\"ecdsa/struct.Signature.html\" title=\"struct ecdsa::Signature\">Signature</a>&lt;C&gt;&gt; for <a class=\"struct\" href=\"ecdsa/struct.SigningKey.html\" title=\"struct ecdsa::SigningKey\">SigningKey</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Self: <a class=\"trait\" href=\"signature/signer/trait.DigestSigner.html\" title=\"trait signature::signer::DigestSigner\">DigestSigner</a>&lt;C::<a class=\"associatedtype\" href=\"ecdsa/hazmat/trait.DigestPrimitive.html#associatedtype.Digest\" title=\"type ecdsa::hazmat::DigestPrimitive::Digest\">Digest</a>, <a class=\"struct\" href=\"ecdsa/struct.Signature.html\" title=\"struct ecdsa::Signature\">Signature</a>&lt;C&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"ecdsa/trait.PrimeCurve.html\" title=\"trait ecdsa::PrimeCurve\">PrimeCurve</a> + <a class=\"trait\" href=\"elliptic_curve/arithmetic/trait.ProjectiveArithmetic.html\" title=\"trait elliptic_curve::arithmetic::ProjectiveArithmetic\">ProjectiveArithmetic</a> + <a class=\"trait\" href=\"ecdsa/hazmat/trait.DigestPrimitive.html\" title=\"trait ecdsa::hazmat::DigestPrimitive\">DigestPrimitive</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"elliptic_curve/scalar/type.Scalar.html\" title=\"type elliptic_curve::scalar::Scalar\">Scalar</a>&lt;C&gt;: <a class=\"trait\" href=\"elliptic_curve/ops/trait.Invert.html\" title=\"trait elliptic_curve::ops::Invert\">Invert</a>&lt;Output = <a class=\"type\" href=\"elliptic_curve/scalar/type.Scalar.html\" title=\"type elliptic_curve::scalar::Scalar\">Scalar</a>&lt;C&gt;&gt; + <a class=\"trait\" href=\"elliptic_curve/ops/trait.Reduce.html\" title=\"trait elliptic_curve::ops::Reduce\">Reduce</a>&lt;C::<a class=\"associatedtype\" href=\"elliptic_curve/trait.Curve.html#associatedtype.UInt\" title=\"type elliptic_curve::Curve::UInt\">UInt</a>&gt; + <a class=\"trait\" href=\"ecdsa/hazmat/trait.SignPrimitive.html\" title=\"trait ecdsa::hazmat::SignPrimitive\">SignPrimitive</a>&lt;C&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"ecdsa/type.SignatureSize.html\" title=\"type ecdsa::SignatureSize\">SignatureSize</a>&lt;C&gt;: <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/std/primitive.u8.html\">u8</a>&gt;,&nbsp;</span>","synthetic":false,"types":["ecdsa::sign::SigningKey"]}];
implementors["k256"] = [{"text":"impl&lt;S&gt; <a class=\"trait\" href=\"signature/signer/trait.Signer.html\" title=\"trait signature::signer::Signer\">Signer</a>&lt;S&gt; for <a class=\"struct\" href=\"k256/ecdsa/struct.SigningKey.html\" title=\"struct k256::ecdsa::SigningKey\">SigningKey</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"signature/signature/trait.PrehashSignature.html\" title=\"trait signature::signature::PrehashSignature\">PrehashSignature</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Self: <a class=\"trait\" href=\"signature/signer/trait.DigestSigner.html\" title=\"trait signature::signer::DigestSigner\">DigestSigner</a>&lt;S::<a class=\"associatedtype\" href=\"signature/signature/trait.PrehashSignature.html#associatedtype.Digest\" title=\"type signature::signature::PrehashSignature::Digest\">Digest</a>, S&gt;,&nbsp;</span>","synthetic":false,"types":["k256::ecdsa::sign::SigningKey"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()