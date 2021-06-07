import classes from "./MeetupItem.module.css";

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
    </li>
  );
}

export default MeetupItem;
