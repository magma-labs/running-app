import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, RootStateOrAny } from 'react-redux'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonList,
  IonItem,
} from "@ionic/react";
import "./Home.css";


const Books = () => {
  const {books} = useSelector((state: RootStateOrAny) => state.BooksReducer) || {}

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank5</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList key={"list"}>
          {books.map((e: any, index: any) => (
            <Link
              style={{ textDecoration: 'none' }}
              to={{
                pathname: `/books/${e.name}`,
                state: { BookDetail: e },
              }}
            >
              <IonItem key={index}>
                <img width="60" height="80" src={e.img} />

                <IonLabel key={index} className="ion-padding">
                  <h2>{e.name}</h2>
                  <h3>{e.author}</h3>
                </IonLabel>
              </IonItem>
            </Link>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Books;
