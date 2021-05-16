import React, { useState, useEffect } from 'react'
import Alert from "@material-ui/lab/Alert";

const Message = (props) => {
    const [show, setShow] = useState(true)

    useEffect(() => {
        const timeId = setTimeout(() => {
            setShow(false)
        }, 5000)

        return () => {
            clearTimeout(timeId)
        }
    }, []);


    if (!show) {
        return null;
    }

    return (

    <div aria-live="polite" aria-atomic="true" style={{position: 'relative', minHeight: '200px',}}>
        <div style={{position: 'absolute', top: 20, right: 50, left: 50,}}>
                    <Alert variant="filled" severity="success">Hi {props.name}!!</Alert>
        </div>
    </div>
    )
}


export default Message;