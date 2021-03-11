import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonInput,
} from "@ionic/react";
import { FirebaseAuthentication } from "@ionic-native/firebase-authentication";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";

const Home = () => {
  const [email, setEmail] = useState("");
  const [pass, setpass] = useState("");

  const authFirebase = () => {
    FirebaseAuthentication.signInWithEmailAndPassword(email,pass)
      .then((res: any) => alert(`res ${res}`))
      .catch((error: any) =>  alert(error));
      alert(email)
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank5</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonInput value={email} placeholder="your@email.com" onIonChange={(e:any) => setEmail(e.target.value)} />
        <IonInput value={pass} placeholder="Password" type="password" onIonChange={(e:any) => setpass(e.target.value)} />

        <IonButton
          onClick={() => {
            authFirebase();
          }}
        >
          AUTH
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
