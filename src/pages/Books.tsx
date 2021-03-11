import React, { useState } from "react";
import { Link } from "react-router-dom";
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

const bookobj = [
  {
    name: "Harry potter",
    img: "https://images-na.ssl-images-amazon.com/images/I/71sH3vxziLL.jpg",
    author: "Leyaim Jimenez",
    pages: 400,
  },
  {
    name: "It",
    img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/It_cover.jpg/220px-It_cover.jpg",
    author: "Juan Juan",
    pages: 400,
  },
  {
    name: "Kizumonogatari",
    img:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1559758130l/46157366._SX318_.jpg",
    author: "NNion Oasis",
    pages: 400,
  },
  {
    name: "Kizumonogatari",
    img:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1559758130l/46157366._SX318_.jpg",
    author: "NNion Oasis",
    pages: 400,
  },
  {
    name: "Kizumonogatari",
    img:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1559758130l/46157366._SX318_.jpg",
    author: "NNion Oasis",
    pages: 400,
  },
  {
    name: "Kizumonogatari",
    img:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1559758130l/46157366._SX318_.jpg",
    author: "NNion Oasis",
    pages: 400,
  },
  {
    name: "Kizumonogatari",
    img:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1559758130l/46157366._SX318_.jpg",
    author: "NNion Oasis",
    pages: 400,
  },
  {
    name: "Kizumonogatari",
    img:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1559758130l/46157366._SX318_.jpg",
    author: "NNion Oasis",
    pages: 400,
  },
];

const Books = () => {
  const [books, setBooks] = useState(bookobj);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank5</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList key={"list"}>
          {books.map((e, index) => (
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
