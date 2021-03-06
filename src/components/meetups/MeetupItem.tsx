import classes from "./MeetupItem.module.css";

import Card from "../ui/Card";

interface Props {
  id: string;
  image: string;
  title: string;
  address: string;
  description: string;
}

function MeetupItem(props: Props): JSX.Element {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button>To Favourites</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
