import React from 'react'
import {TextField,Grid,InputAdornment,IconButton} from '@material-ui/core'
// import Visibility from '@material-ui/icons/Visibility'
// import VisibilityOff from '@material-ui/icons/VisibilityOff'

const Input=({name,half,autoFocus,type,handleShowPassword,handleChange,label})=>
   (
    <div>
      <Grid item={12} sm={half?6:12}>
        <TextField
        name={name}
        onChange={handleChange}
        variant="outlined"
        required 
        fullwidth
        label={label}
        autoFocus={autoFocus}
        type={type}
        InputProps={name === 'password'?{
            endAdornment:(
                <InputAdornment positiom="end">
                    <IconButton onClick={handleShowPassword}>
                        {/* {type === "password"?<Visibility/>:<VisibilityOff/>} */}
                    </IconButton>
                </InputAdornment>
            ),
        }:null}
        />

       
        
      </Grid>
    </div>
  )


export default Input
