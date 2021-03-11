import React from "react";
import { useHistory } from "react-router-dom";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import TimerBook from "../components/TimerBook";
import "./Books.css";

const BooksDetails = (props: any) => {
  const { BookDetail } = props?.location?.state || {};
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <div>
            <button type="button" onClick={() => history.goBack()}>
              <p> Go back</p>
            </button>
          </div>
          <IonTitle className="ion-text-center">Book</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {BookDetail && (
          <>
            <img
              className={"center"}
              width="160"
              height="280"
              src={BookDetail.img}
            />
            <h2 className={"book-info"}>{BookDetail.name}</h2>
            <h3 className={"book-info"}>{BookDetail.author}</h3>
            <h4 className={"book-info"}>{BookDetail.pages}</h4>
          </>
        )}

        <TimerBook />
      </IonContent>
    </IonPage>
  );
};

export default BooksDetails;
