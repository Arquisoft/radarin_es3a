import { List, Value } from '@solid/react';
import { makeStyles } from '@material-ui/core/styles';
import { AutoBodyShop } from 'rdf-namespaces/dist/schema';

const useStyles = makeStyles((theme) => ({

    friend: {
        color: '#F',
        size: '50px',
        padding: '3em',
        width: '100%',
        maxWidth: 360,
        margin: 'auto',
        listStyle: 'none'
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