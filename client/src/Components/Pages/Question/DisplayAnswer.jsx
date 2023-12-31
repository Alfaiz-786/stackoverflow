import React from 'react'
import Questions from '../../Homemainbar/Questions'
import { Link , useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Avatar from '../../Avatar/Avatar'
import moment from 'moment'
import {deleteAnswer} from '../../../actions/question'

const DisplayAnswer = ({question, handleShare}) => {

  const { id } = useParams()
  const dispatch = useDispatch()
  const User = useSelector((state) => (state.currentUserReducer))

  const handleDelete = (answerId, noOfAnswer) => {
    dispatch(deleteAnswer(id, answerId, noOfAnswer - 1))
  }
  return (
    <div>
        {
            question.answer.map((ans)=>(
                <div className='display-ans' key={ans._id}>
                    <p>{ans.answerBody}</p>
                    <div className="question-actions-user">
                        <div>
                            <button type='button' onClick={handleShare}>Share</button>
                            {
                              User?.result?._id === ans?.userId && (
                                <button type='button' onClick={()=> handleDelete(ans._id, question.noOfAnswer)}>Delete</button>
                              )
                            }
                        </div>
                        <div>
                            <p>answered {moment(ans.answeredOn).fromNow()}</p>
                            <Link to={`/User/${question.userId}`} className='user-link' style={{color:"#0086d8"}}>
                              <Avatar backgroundColor="green" px="7px" py="7px">{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                            <div>
                              {ans.userAnswered}
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            ))    
        }
    </div>
  )
}

export default DisplayAnswer