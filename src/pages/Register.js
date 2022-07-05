import { useEffect, useState } from 'react';
import { FormRow, Logo } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true
}


const Register = () => {
    const [values, setValues] = useState(initialState);
    const { user, isLoading } = useSelector((store) => store.user);
    const navigate = useNavigate()
    const dispatch = useDispatch();


    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [user, navigate]);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValues({
            ...values,
            [name]: value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, isMember } = values;
        if (!email || !password || (!isMember && !name)) {
            toast.error('Please felid out all felids');
            return;
        }

        if (isMember) {
            dispatch(loginUser({ email, password }))
            return;
        }

        dispatch(registerUser({ name, email, password }))
    }


    const toggleMember = () => {
        setValues({ ...values, isMember: !values.isMember })
    }


    return (
        <Wrapper className='full-page'>
            <form className='form' onSubmit={onSubmit}>
                <Logo />
                <h3>{values.isMember ? 'Login' : 'Register'}</h3>
                {/* name feild */}
                {!values.isMember && (<FormRow
                    type='text'
                    name='name'
                    values={values.name}
                    handleChange={handleChange}
                />)}
                {/* email feild */}
                <FormRow
                    type='email'
                    name='email'
                    values={values.email}
                    handleChange={handleChange}
                />

                {/* password feild */}
                <FormRow
                    type='password'
                    name='password'
                    values={values.password}
                    handleChange={handleChange}
                />
                <button type='submit' className='btn btn-block' disabled={isLoading}>{isLoading ? 'loading ...' : 'Submit'}</button>
                <button
                    type="button"
                    className="btn btn-block btn-hipster"
                    disabled={isLoading}
                    onClick={() => {
                        dispatch(loginUser({ email: "testUser@test.com", password: "secret" }));
                    }}
                >
                    {isLoading ? "loading..." : "demo"}
                </button>
                <p>{values.isMember ? 'Not a member yet?' : 'Already a memeber?'}
                    <button type='button' className='member-btn' onClick={toggleMember}>{values.isMember ? 'Register' : 'Login'}</button></p>
            </form>
        </Wrapper>
    )
}

export default Register