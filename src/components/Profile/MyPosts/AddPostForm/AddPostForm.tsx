import React, {useState} from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import s from './AddItemFrom.module.css'

export const AddPostForm = () => {
    const [text, setText] = useState('')
    return <div>
        <TextField id="outlined-basic" label="Hello Maxi" variant="outlined" value={text}
                   onChange={(e) => setText(e.currentTarget.value)}/>
        {text !== '' && <Button variant="text">
            <SendRoundedIcon className={s.focus}/>
        </Button>}
    </div>

};