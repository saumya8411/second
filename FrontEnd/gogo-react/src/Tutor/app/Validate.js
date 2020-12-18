import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getCurrentUser } from '../../helpers/Utils';

const Validate = () => {
    const history = useHistory();
    useEffect(() => {
        try {
            if (!getCurrentUser().frontend_token) 
                history.push('/Tutor/user/login');    
        } catch (e)  {
            history.push('/Tutor/user/login');
        }
    })
    return null;
}

export default Validate;