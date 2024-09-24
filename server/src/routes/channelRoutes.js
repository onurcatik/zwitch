// import express from "express";
// import ExpressValidation from "express-joi-validation";
// import Joi from "joi";
// import { getChannelDetails } from "../controllers/controllers.js"

// const router = express.Router();

// const channelDetailsSchema = Joi.object({
//   channelId: Joi.string().required(),
// });

// const validator = ExpressValidation.createValidator({});

// router.get(
//   "/:channelId",
//   validator.params(channelDetailsSchema),
//   getChannelDetails
// );

// export default router;

import express from "express";
import ExpressValidation from "express-joi-validation";
import Joi from "joi";
import { getChannelDetails, getChannels, postFollowChannel, getFollowedChannels } from "../controllers/controllers.js";
import { verifyToken } from "../middlewares/auth.js";

const router = express.Router();
const validator = ExpressValidation.createValidator({});

// Joi şemasını tanımlama
const channelDetailsSchema = Joi.object({
  channelId: Joi.string().required(),
});

router.get("/followed", verifyToken, getFollowedChannels);

router.post(
    "/follow",
    verifyToken,
    validator.body(channelDetailsSchema),
    postFollowChannel
  );

// Kanal detaylarını alma rotası
router.get(
  "/:channelId",
  validator.params(channelDetailsSchema),
  getChannelDetails
);

router.get("/", getChannels);

export default router;
