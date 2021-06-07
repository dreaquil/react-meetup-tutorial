import classes from './Card.module.css';

interface Props{
    children: any;
}

function Card(props: Props):JSX.Element{
    return  <div className={classes.card}>{props.children}</div>
}

export default Card;