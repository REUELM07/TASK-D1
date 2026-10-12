import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import serviceAccount from './credentials/serviceAccountKey.json' with { type: 'json' };

//here i am initializing the firebase admin
const app = getApps().length === 0
  ? initializeApp({
      credential: cert(serviceAccount)
    })
  : getApps()[0];

//now, i am connecting this to firestore
const db = getFirestore(app);

export { db };