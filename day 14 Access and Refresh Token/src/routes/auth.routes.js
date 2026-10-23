import { Router } from "express";
import userModel from "../models/user.model";
import bcrypt from "bcryptjs";
import { generateTokens, verifyAccessToken, verifyRefreshToken } from "../utils/auth";
const router = Router();

/**
 * @POST /api/auth/register
 */

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const isUserExists = await userModel.findOne({ email });

  if (isUserExists) {
    return res.status(400).json({
      message: "user already exists",
      errors: [
        {
          path: "email",
          message: "User already exists",
        },
      ],
    });
  }

  const user = await userModel.create({
    name,
    email,
    passwordHash: await bcrypt.hash(password, 12),
  });



  const{ accessToken, refreshToken } = generateTokens({ userId: user._id })
  await user.save()

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
  })

  res.status(201).json({
    message: "user register successfully",
    data: {
        user: {
            name: user.name,
            email: user.email
        }
    },
    accessToken
  })


});



/**
 *@GET /api/auth/me 
 */

 router.get("/me", async (req, rea) => {
 const accessToken = req.headers.authorization?.split(" ")[ 1 ]

 try {
   
    const decoded = verifyAccessToken(accessToken)
    
    const user = await userModel.findById(decoded.id)

    res.status(200).json({
      message: "user fetched successfully",
      data: {
        user: {
          name: user.name,
          email: user.email
        }
      }
    })

 } catch (error) {
     
    return res.status(401).json({
      message: "Unauthorized, Invalid or expired access token",
    })
 }

 })

/**
 * @POST /api/auth/refresh
 */
router.post("/refresh", async (req, res) => {
  const refrehToken = req.cookie.refreshToken

  if (!refreshToken) {
    return res.status(401).json({
      message: "Unauthorized, refresh token not found",
    })
  }

  try {

    const decoded = await verifyRefreshToken(refrehToken)

    const user = await userModel.findById(decoded.id)

    if(!user || user.refreshToken !== refrehToken) {
      user.refreshToken = null
      await user.save()

      return res.status(401).json({
        message: "Unauthorized, refresh token mismatch",
      })
    }

    const { accessToken, refrehToken: newRefreshToken } = generateTokens({ userId: user._id })

    res.cookie("refreshToken", newRefreshToken, { httpOnly: true })

    user.refreshToken = newRefreshToken
    await user.save()

    res.status(200).json({
      message: "tokens refreshed successfully",
      accessToken
    })
    
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized, Invalid or expired refresh token",
    })
  }

})

export default router;
