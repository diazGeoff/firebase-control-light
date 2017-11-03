
import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import * as cors from 'cors';

const corsOption = {
    origin: true
}

export const listener = functions.https.onRequest((req, res) => {
    var request = cors(corsOption)

    request(req, res, async () => {
        let postData = req.body
        admin.database().ref("employee").push(postData)
            .then((result) => {
                res.status(200).json(result);
            })
            .catch((error) => {
                res.status(400).json(error);
            })
    })
})