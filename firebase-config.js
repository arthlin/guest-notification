const firebaseConfig = {
  apiKey: "AIzaSyD30cV4rdx1Ys4J4eGnznPieUUhOhWhHrQ",
  authDomain: "teachstudy-b8b64.firebaseapp.com",
  projectId: "teachstudy-b8b64",
  storageBucket: "teachstudy-b8b64.firebasestorage.app",
  messagingSenderId: "195283799004",
  appId: "1:195283799004:web:b212e67d4e30ac95dddd19"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

db.enablePersistence({ synchronizeTabs: true }).catch(err => {
  if (err.code === 'failed-precondition') {
    console.warn('離線持久化：多頁籤同時開啟，僅單一來源可用');
  } else if (err.code === 'unimplemented') {
    console.warn('離線持久化：瀏覽器不支援');
  }
});
