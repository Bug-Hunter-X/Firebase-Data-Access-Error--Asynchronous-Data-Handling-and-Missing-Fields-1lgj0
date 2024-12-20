```javascript
import { onSnapshot, collection } from 'firebase/firestore';

db.onSnapshot(collection(db, 'users'), (snapshot) => {
  snapshot.docs.forEach((doc) => {
    // Check for existence of data before accessing
    const name = doc.data().name ?? 'Unknown'; //use default value if missing
    console.log(name);
  });
});
```

Alternatively, to handle the asynchronous nature of the data:

```javascript
import { onSnapshot, collection } from 'firebase/firestore';

db.onSnapshot(collection(db, 'users'), (snapshot) => {
    snapshot.docChanges().forEach((change) => {
        if (change.type === 'added' || change.type === 'modified') {
            console.log('Document data:', change.doc.data());
        }        if (change.type === 'removed') {
            console.log('Removed Document');
        }
    });
});
```