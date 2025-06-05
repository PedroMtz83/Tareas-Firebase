const admin = require("firebase-admin");
const serviceAccount = require("../tareas-9db82-firebase-adminsdk-fbsvc-53dae8c141.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const tasksCollection = db.collection("tareas");

module.exports = { tasksCollection };