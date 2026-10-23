import jwt from "jsonwebtoken";
import config from "../config/config";


export const generateTokens = ({ userId }) => {
    const accessToken = jwt.sigh({ id: userid }, config.ACCESS_TOKEN_SECRET, { expiresIn: "15m" })
    const refreshToken = jwt.sigh({ id: userid }, config.REFRESH_TOKEN_SECRET, { expiresIn: "7d" })

    return { accessToken, refreshToken }
}

export function verifyAccessToken(token) {
    const decoded = jwt.verify(token,config.ACCESS_TOKEN_SECRET)

    return decoded
}

export function verifyRefreshToken(Token) {
    const decoded = jwt.verify(token, config.REFRESH_TOKEN_SECRET)
    return decoded
}