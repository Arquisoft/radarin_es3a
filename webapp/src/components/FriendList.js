import { List } from '@solid/react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    friend: {
        color: '#F',
        size: '50px',
        padding: '1em',
    },

}));

function FriendList () {

    const classes = useStyles();

    return (
        <>
            <h1>Lista de amigos</h1>
            <div className={classes.friend}>
                
                <List src="user.friends"/>
            </div>
        </>
    )
}

export default FriendList;