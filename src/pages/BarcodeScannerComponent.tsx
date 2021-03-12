import React, { useState, useEffect} from "react";
import { Redirect } from "react-router-dom";
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from "@ionic/react";
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux'
import { getBook } from '../Redux/actions/bookAction'
import "./Home.css";

const BarcodeScannerComponent = () => {
  const [encodedText, setEncodedText] = useState('')
  const dispatch = useDispatch()
  const { dataBook } = useSelector((state: RootStateOrAny) => state.BooksReducer) || {}

  const scanCode = async () => {
    const data = await BarcodeScanner.scan();
    alert(JSON.stringify(data));
    dispatch(getBook(data.text))
    setEncodedText(data.text)
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

          {dataBook && 
            <Redirect 
              to={{
                pathname: `/books/${dataBook.name}`,
                state: { BookDetail: dataBook, scanner: true },
              }}
            />
          }
        </IonContent>
      </IonPage >
  );
};

export default BarcodeScannerComponent;
