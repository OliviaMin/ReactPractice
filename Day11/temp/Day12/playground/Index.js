import React, { createRef, useContext } from 'react'
import { UserContext } from './UserContext'
import { login } from './Login'




export default function Index() {
    const { user, setUser } = useContext(UserContext);
    return (
        <div>
            HOME!
            <pre>{JSON.stringify(user, null, 2)}</pre>
            {user ? (
                <button
                    onClick={() => {
                        // call logout
                        setUser(null);
                    }}
                >
                    logout
                </button>
            ) : (
                    <button
                        onClick={async () => {
                            const user = await login();
                            setUser(user);
                        }}
                    >
                        login
                    </button>
                )}
        </div>
    )
}