import React ,{ useState} from 'react'
import { servicePath } from '../constants/defaultValues'

function useCounter() {
    const [name, setName] = useState("Launch")
    const changeName = () => {
        setName(name =  "Launched")
    }
    return [name,changeName]
}

export default useCounter
