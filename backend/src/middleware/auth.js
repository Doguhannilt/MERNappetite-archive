const { auth } = require("express-oauth2-jwt-bearer");
const jwt = require("jsonwebtoken");
const User = require("../mongodb/models/user");

// JWT doğrulama işlemi
module.exports.jwtCheck = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  tokenSigningAlg: 'RS256'
});

// JWT'i çözümleme ve kullanıcıyı doğrulama
module.exports.jwtParse = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res.sendStatus(401); // Yetkilendirme başarısız
  }

  // Bearer token'ını al
  const token = authorization.split(" ")[1];

  try {
    // Token'ı doğrula
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // Token içindeki kullanıcı ID'sini al
    const auth0Id = decodedToken.sub;

    // Kullanıcıyı bul
    const user = await User.findOne({ auth0Id });

    // Kullanıcı bulunamadıysa veya yetkilendirme başarısız olduysa 401 hatası gönder
    if (!user) {
      return res.sendStatus(401);
    }

    // Kullanıcıyı doğruladık, req nesnesine kullanıcı ID'sini ekle
    req.auth0Id = auth0Id;
    req.userId = user._id.toString();

    // Bir sonraki işlem adımına geç
    next();
  } catch (error) {
    // JWT doğrulama hatası durumunda 401 hatası gönder
    return res.sendStatus(401);
  }
};
