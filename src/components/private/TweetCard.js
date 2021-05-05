import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import moment from "moment";
import {
  faHeart,
  faComment,
  faRetweet,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ApiUtils from "./ApiUtils";
import { Button } from "react-bootstrap";

export default function TweetCard({ tweetsitem, key }) {
  const { _id, text, created, updated, tags, creator } = tweetsitem;
  const userId = localStorage.getItem('userId')
  const [like, setLike] = useState(0);
  const [liked, setLiked] = useState();
  
  // Con questo useffect settiamo lo stato iniziale del nostro tweet, e rispondiamo ad eventuali cambiamenti
  useEffect(() => {
    setLike(tweetsitem.like)
    setLiked(tweetsitem.liked)
  }, [tweetsitem]);


  // BUG: se si clicca velocemente partono diverse chiamate e finisce in errore
  // Una soluzione potrebbe essere disabilitare con uno stato il pulsante mentre la chiamata è in carso (in caso mettere un icona di caricamento)
  const triggerLike = () => {
    // con find troviamo se nella lista utenti dentro tweetsitem.liked c'è il nostro user ID
    const alreadyLiked = liked.find((users) => {
      return users.id === userId
    });
    // Se esiste allora procediamo con unlike, senno con un like
    if(alreadyLiked) {
      unlikeTweet();
    } else {
      likeTweet();
    }
  }

  const likeTweet = () => {
    ApiUtils(`tweets/like/${_id}`, "POST").then((json) => {
      setLike(json.like);
      setLiked(json.liked);
    });
  };

  const unlikeTweet = () => {
    ApiUtils(`tweets/unlike/${_id}`, "POST").then((json) => {
      setLike(json.like);
      setLiked(json.liked);
    });
  };

  return (
    <div>
      <Card>
        <div className="tweet-info">
          <div>{creator.name}</div>
          <div>{creator.username}</div>
          <div>{moment(created).fromNow()}</div>
        </div>

        <div> {text} </div>

        <div className="tweet-icon-container">
          {/* Non è mai una buona pratica usare onClick su un elemento diverso da button, in questo caso ho racchiuso le icon dentro i bnutton di Bootstrap */}
            <Button size="sm" onClick={triggerLike}>
              <FontAwesomeIcon size="xs" icon={faHeart} /> {like}
            </Button>
            <Button size="sm" onClick={triggerLike}>
              <FontAwesomeIcon size="xs" icon={faComment} />
            </Button>
            <Button size="sm" onClick={triggerLike}>
              <FontAwesomeIcon size="xs" icon={faRetweet} />
            </Button>
            <Button size="sm" onClick={triggerLike}>
              <FontAwesomeIcon size="xs" icon={faUpload} />
            </Button>
        </div>
      </Card>
    </div>
  );
}
