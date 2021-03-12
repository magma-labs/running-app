import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonFooter,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { Link } from "react-router-dom";
import { searchBookAction } from "../Redux/actions/bookAction";

export const SearchBar: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const { searchBook } =
    useSelector((state: RootStateOrAny) => state.BooksReducer) || {};

  useEffect(() => {
    console.log("entro use effect");
    dispatch(searchBookAction(searchText));
  }, [searchText]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>IonSearchBar Examples</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSearchbar
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
        ></IonSearchbar>
        <IonList key={"list"}>
          {searchBook?.map((e: any, index: any) => (
            <Link
              style={{ textDecoration: "none" }}
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
      <IonFooter>
        <IonToolbar>Search Text: {searchText ?? "(none)"}</IonToolbar>
      </IonFooter>
    </IonPage>
  );
};
