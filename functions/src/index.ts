// src/index.ts
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as LightFunction from './light-status';

admin.initializeApp(functions.config().firebase);

// export const addMessage = AddMessage.listener;
// export const makeUpperCase = UpCaseMessages.listener;
export const lightFunction = LightFunction.listener;