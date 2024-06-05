import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../../firebase/firebase.config';

const ExtraPage = ({ }) => {

    const dispatch = useDispatch();


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (runningUser) => {
            if (runningUser?.email) {
                // dispatch(useGetMeQuery(runningUser));
                // dispatch(setUser({
                //     uid: runningUser.uid,
                //     email: runningUser.email,
                //     displayName: runningUser.displayName,
                //     photoURL: runningUser.photoURL,
                // }))
            }
        })
        return () => unsubscribe();
    }, [dispatch]);

    console.log('import.meta.env.VITE_SERVER_URL:', import.meta.env.VITE_SERVER_URL);

    return (
        <div
            style={{
                display: "none"
            }}
        >

        </div>
    );
};

export default ExtraPage;