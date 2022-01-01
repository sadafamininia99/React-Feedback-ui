import {creatContext ,useState} from 'react'

const FeedbackContext =creatContext()
export const FeedbackProvider =({children}) => {

    return <FeedbackContext.provider value={{
        const [feedback,setFeedback ] =const [state, setstate] = useState(initialState)
    }}>
        {children}
    </FeedbackContext.provider>
}