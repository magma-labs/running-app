import React, { useState } from "react";
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonLabel,
  IonItem,
  IonInput,
} from "@ionic/react";
import "./Home.css";

const BarcodeScannerComponent = () => {
  const [encodedText, setEncodedText] = useState('')
  const [encodeData, setEncodeData] = useState('')

 const handleChange = (event: any) => {
    const { value, name } = event.target;
    console.log(value, name);

  };

  const scanCode = async () => {
    const data = await BarcodeScanner.scan();
    alert(JSON.stringify(data));
    setEncodedText(data.text)
  };

  const generateCode = () => {
    BarcodeScanner.encode(BarcodeScanner.Encode.TEXT_TYPE, encodeData)
      .then(data => {
        console.log("get data",data);
      }, err => {
        console.log("Error occured : " + err);
      });
  };


  return (
    <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Ionic Barcode Scanner</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">

          <h1>Click Button To Scan</h1>

          <IonButton onClick={scanCode} color="primary">
            Scan
          </IonButton>

          {
            encodedText ?
              (<div>
                <p>
                  Scanned Code Text : <b></b>
                </p>
                <p>
                  Scanned Code Format : <b></b>
                </p>
              </div>) : ''
          }

        </IonContent>
      </IonPage >
  );
};

export default BarcodeScannerComponent;
