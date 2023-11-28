import { Injectable, OnDestroy } from '@angular/core';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { Auth, GoogleAuthProvider, Unsubscribe, User, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService implements OnDestroy {
  private _app: FirebaseApp | null = null

  private readonly firebaseConfig = {
    apiKey: "AIzaSyDC3FSZyz7MUHlbfSTVPL2wzznDdiMy9bI",
    authDomain: "oshi-project.firebaseapp.com",
    projectId: "oshi-project",
    storageBucket: "oshi-project.appspot.com",
    messagingSenderId: "992181982580",
    appId: "1:992181982580:web:603473e8bf310061fec821"
  };

  private unsubscribe: Unsubscribe = () => {}

  auth: Auth | null = null

  user$ = new BehaviorSubject<User | null | undefined>(undefined)

  provider = new GoogleAuthProvider();

  constructor() { }

  get app (): FirebaseApp | null {
    return this._app
  }
  private set app (app: FirebaseApp) {
    this._app = app
  }

  ngOnDestroy (): void {
    this.unsubscribe()
  }

  public initialize (): void {
    this.app = initializeApp(this.firebaseConfig)
    this.auth = getAuth(this.app)

    this.unsubscribe = onAuthStateChanged(this.auth, (user) => {
      this.user$.next(user ? user : null)
    });
  }

  public async googleSignInWithPopup (): Promise<void> {
    if (!this.auth) return

    try {
      const result = await signInWithPopup(this.auth, this.provider)
      this.user$.next(result.user)
    } catch (e) {
      console.error(e);
    }
  }

  public async googleSignOut (): Promise<void> {
    if (!this.auth) return

    try {
      await signOut(this.auth)
      this.user$.next(null)
    } catch (e) {
      console.error(e);
    }
  }
}
