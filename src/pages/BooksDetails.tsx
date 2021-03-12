import React from "react";
import { useHistory } from "react-router-dom";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from "@ionic/react";
import {useDispatch} from 'react-redux'
import { saveBook } from '../Redux/actions/bookAction'
import TimerBook from "../components/TimerBook";
import "./Books.css";

const BooksDetails = (props: any) => {
  const { BookDetail, scanner } = props?.location?.state || {};
  const history = useHistory();
  const dispatch = useDispatch()

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

        {scanner && (
          <div className="btn">
            <IonButton
              onClick={() => {
                dispatch(saveBook(BookDetail))
              }}
            >
              Save
            </IonButton>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default BooksDetails;
