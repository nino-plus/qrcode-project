import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { CodeCard } from '../interfaces/code-card';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private db: AngularFirestore) {}

  createCodeCard(codeCard: Omit<CodeCard, 'cardId'>): Promise<void> {
    const cardId = this.db.createId();
    return this.db
      .doc(`cordCards/${cardId}`)
      .set({
        cardId,
        ...codeCard,
      })
      .then(() => {
        console.log('書き込み成功〜！！！');
      });
  }
}