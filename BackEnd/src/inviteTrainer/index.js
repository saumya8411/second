const router = require('express').Router();
const auth = require('../middleware/deepakAuth');
const {InviteTrainer} = require('./model');
const { sendInvitationMail } = require('../emails/account');
const bcrypt = require('bcryptjs')


const validateData = (data) => {
    const arr = Object.keys(data).map(key => key);
    arr.forEach(elem => {
        if (!elem)
            return { success: 0, error: `provide ${elem} value` };
    })
    return { success: 1 };
}

router.post('/invite', auth, async (req, res) => {
    try {
        const {
            invited_user_first_name,
            invited_user_last_name,
            invited_user_role,
            invited_user_email,
        } = req.body.values;
        const validate = validateData(req.body.values);
        if (!validate.success)
            return res.status(400).json({
                success: 0,
                error:validate.error
            })
        try {
            const mailSent = sendInvitationMail(invited_user_first_name,
                invited_user_last_name,
                invited_user_role,
                invited_user_email,
                req.user.customer_id
            );
            if (!mailSent)
                return res.status(400).json({
                    success: 0,
                    error:'unable to send mail'
                })
            console.log('deom index.js s',mailSent)
        } catch (err) {
            console.log(err);
            return res.status(400).json({
                success: 0,
                error:'unable to send mail'
            })
        }
        
        return res.status(200).json({
            success:1
        })
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            success: 0,
            error:'unable to send mail'
        })
    }
})

router.post('/', async (req, res) => {
    console.log(req.body)
    try {
        let {
            customer_first_name,
            customer_email,
            customer_phone_number,
            customer_last_name,
            customer_password,
            invited_user_role,
            customer_id
        } = req.body.values;

        const sqlCheck = await InviteTrainer.findOne({ where: { invited_user_email: customer_email } });
        if (sqlCheck)
            return res.status(400).json({
                success: 0,
                error:'you are already registered'
            })

        const validate = validateData(req.body.values);
        if (!validate.success)
            return res.status(400).json({
                success: 0,
                error:validate.error
            })
        const salt = bcrypt.genSaltSync(10);
        customer_password = await bcrypt.hashSync(customer_password, salt);

        const savedTrainer = await InviteTrainer.create({
            customer_id,
            invited_user_first_name:customer_first_name,
            invited_user_last_name:customer_last_name,
            invited_user_role,
            invited_user_email: customer_email,
            invited_user_phone_number: customer_phone_number,
            invited_user_password:customer_password
        })
        if (!savedTrainer)
            return res.status(400).json({
                success: 0,
                error:'unable to save data'
            })

        const mailSent = await sendInvitationMail(customer_first_name,customer_last_name,invited_user_role,customer_email);
        if (!mailSent)
            return res.status(400).json({
                success: 0,
                error:'unable to send mail'
            })
        
        return res.status(200).json({
            success:1
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: 0,
            error:'unable to invite user'
        })
    }
})

module.exports = router;