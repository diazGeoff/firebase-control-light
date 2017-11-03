
import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import * as cors from 'cors';

const corsOption = {
    origin: true
}

export const listener = functions.https.onRequest((req, res) => {
    var request = cors(corsOption)

    request(req, res, async () => {
        let color = req.query.color
        let value = parseInt(req.query.value)

        admin.database().ref(`lights/${color}`).set(value)
        res.status(200).json({
            "status": "success"
        });
    })
})