import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

interface Props {
    meetups: any;
}

function MeetupList(props: Props): JSX.Element {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup: any) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
