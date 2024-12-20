# Firebase Data Access Error: Asynchronous Data Handling and Missing Fields

This repository demonstrates a common error when working with Firebase Firestore: attempting to access data from a document snapshot before it's fully loaded or trying to access a field that does not exist.  The `bug.js` file shows the erroneous code, while `bugSolution.js` provides a corrected version.

## Problem

The primary issue is the asynchronous nature of data retrieval from Firestore.  The `onSnapshot` listener is triggered multiple times, including once initially with an empty snapshot. Attempting to access data fields before they are populated can lead to errors like `TypeError: Cannot read properties of undefined (reading 'name')`.

Additionally, accessing a field that is not present in the document also produces errors.

## Solution

The solution involves checking for the existence of data before accessing it using optional chaining (?.) and nullish coalescing (??).  This ensures that the code handles cases gracefully where data might be missing or not yet loaded.