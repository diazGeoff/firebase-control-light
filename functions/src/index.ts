// src/index.ts
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as UserFunction from './user-add';

admin.initializeApp(functions.config().firebase);

// export const addMessage = AddMessage.listener;
// export const makeUpperCase = UpCaseMessages.listener;
export const userFunction = UserFunction.listener;