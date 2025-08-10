import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebaseConfig';
const Login = (prors) => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [btn, setBtn] = useState(false);

    useEffect(() => {

        if (password.length > 5 && email !== '') {
            setBtn(true);
        } else if (btn) {
            setBtn(false);
        }
    }, [email, password]);

    const handleSubmit = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(user => {
                setEmail('');
                setPassword('');
                navigate('/welcome', { replace: true });
            })
            .catch(error => {
                setError(error);
                setEmail('');
                setPassword('');
            })

    }


    return (
        <div className='signUpLoginBox'>
            <div className='slContainer'>
                <div className="formBoxLeftLogin">
                </div>
                <div className="formBoxRight">
                    <div className="formContent">
                        <h2>Connexion</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="inputBox">
                                <input onChange={e => setEmail(e.target.value)} value={email} type="email" autoComplete="off" required />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="inputBox">
                                <input onChange={e => setPassword(e.target.value)} value={password} type="password" autoComplete="off" required />
                                <label htmlFor="password">Mot de passe</label>
                            </div>
                            {<button disabled={btn ? false : true}>Connexion</button> }
                        </form>
                        <div className='linkContainer'>
                            <Link className='simpleLink' to="/signup">Nouveau sur Marvel Quiz ? Inscrivez vous maintenant .</Link>
                            <br />
                            <Link className='simpleLink' to="/forgetpassword"> Mot de pass oublié? Récupérez-le ici  </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
