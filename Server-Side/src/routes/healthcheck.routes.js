import {Router} from 'express'

import {healthCheck, notAllowed} from '../controllers/healthcheck.controller.js'

const router = Router()

router.route("/").get(healthCheck).all(notAllowed)


export default router