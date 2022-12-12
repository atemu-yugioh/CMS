import jwt from "jsonwebtoken";
import config from "../../config/config";

const privateKey: string = config.private_key;

const jwtUtils = {
  sign: (payload: Object, option?: jwt.SignOptions | undefined) => {
    return jwt.sign(payload, privateKey, option);
  },
  decode: (token: string) => {
    try {
      const decode = jwt.verify(token, privateKey);

      return { valid: true, expired: false, decode: decode };
    } catch (error) {
      return {
        valid: false,
        expired: true,
        decode: null,
      };
    }
  },
};

export default jwtUtils;
