import React , {useState} from 'react'
import { useParams , Link , useNavigate, useLocation} from 'react-router-dom'
import uparrow   from '../../../assets/uparrow (1).png'
import downarrow from '../../../assets/downarrow.png'
import "./Questions.css"
import Avatar from '../../Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer'
import {useSelector , useDispatch} from 'react-redux'
import {postAnswer, deleteQuestion, voteQuestion} from '../../../actions/question'
import moment from 'moment'
import copy from 'copy-to-clipboard'

const QuestionDetails = () => {

  const { id } = useParams()
  const questionsList = useSelector(state => state.questionReducer)

  // var questionsList =[{
    
    
  //   _id: '1',
  //   upVotes : 3,
  //   dowmVotes : 2,
  //   noOfAnswer: 2,
  //   questionTitle : "what is a function?",
  //   questionBody :"It is meant to be",
  //   questionTags : ["java", "nodejs", "reactjs", "mongodb"],
  //   userPosted : "mano",
  //   userId : 1,
  //   askedOn : "jan 1",
  //   answer: [{
  //     answerBody : "Answer",
  //     userAnswered : "Hisham",
  //     answeredOn : "jan 2",
  //     userId : 2 
  //   }]
   
  // },
  //  {
  //   _id: '2',
  //   upVotes : 5,
  //   dowmVotes : 2,
  //   noOfAnswer: 0,
  //   questionTitle : "What is the function?",
  //   questionBody : "It is meant to be",
  //   questionTags : ["javascript" , "R" , "python"],
  //   userPosted : "mano",
  //   userId : 2,
  //   askedOn : "jan 1",
  //   answer: [{
  //     answerBody : "Answer",
  //     userAnswered : "Hisham",
  //     answeredOn : "jan 2",
  //     userId : 2 
  //   }]
  //  },
  //  {
  //   _id: '3',
  //   upVotes : 3,
  //   dowmVotes : 2,
  //   noOfAnswer:0,
  //   questionTitle : "what is a fuction?",
  //   questionBody : "It is meant to be",
  //   questionTags : ["javascript" , "R" , "python"],
  //   userPosted : "mano",
  //   userId : 3,
  //   askedOn :  "jan 1",
  //   answer: [{
  //     answerBody : "Answer",
  //     userAnswered : "Hisham",
  //     answeredOn : "jan 2",
  //     userId : 2 
  //   }]
  //  }]

    const [Answer, setAnswer] = useState('');
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const User = useSelector((state) => (state.currentUserReducer));
    const location = useLocation();
    const url = "http://localhost:3000";



    const handlePostAns = (e, answerLength) =>{
      e.preventDefault()
      if(User === null){
        alert('Login or Signup to answer a question')
        Navigate('/Auth')
      }
      else{
        if(Answer === ''){
          alert('Enter an answer before submitting')
        }else{
          dispatch(postAnswer({id, noOfAnswer: answerLength + 1, answerBody:Answer, userAnswered:User.result.name, userId: User.result._id}))
        }
  }
}

  const handleShare = ()=>{
    copy(url+location.pathname)
    alert('Copied url : '+url+location.pathname)
  }

  const handleDelete = () => {
    dispatch(deleteQuestion(id, Navigate))
  }

  const handleUpVote = () => {
    if (User === null) {
      alert("Login or Signup to down vote a question");
      Navigate("/Auth");
    } else{
      dispatch(voteQuestion(id, 'upVote', User.result._id))
    }
 };

  const handleDownVote = () => {
    if (User === null) {
      alert("Login or Signup to down vote a question");
      Navigate("/Auth");
    } else{
      dispatch(voteQuestion(id, 'downVote', User.result._id))
    }
 }

  return (
    <div className='question-details-page'>
        
        {
          questionsList.data === null ? 
          <h1> Loading... </h1> :
          <>
            {
              questionsList.data.filter(question => question._id === id).map(question => (
                <div key={question._id}>
                  <section className='question-details-container'>
                    <h1>{question.questionTitle}</h1>
                    <div className='question-details-container-2'>
                      <div className='question-vote'>  
                        <img src={uparrow} alt="uparrow" width='18' className='votes-icon' onClick={handleUpVote} />
                        <p>{question.upVote.length  - question.downVote.length}</p>
                        <img src={downarrow} alt="downarrow" width='18' className='votes-icon' onClick={handleDownVote} />
                      </div>
                      <div style={{width: "100%"}}>
                        <p className='question-body'>{question.questionBody}</p>
                        <div className="question-details-tags">
                        {
                         question.questionTags.map((tag) => (
                            <p key={tag}>{tag}</p>
                        ))
                        }
                        </div>
                        <div className="question-actions-user">
                          <div>
                            <button type='button' onClick={handleShare}>Share</button>
                            {
                              User?.result?._id === question?.userId && (
                                <button type='button' onClick={handleDelete}>Delete</button>
                              )
                            }
                            
                          </div>
                          <div>
                            <p>asked {moment(question.askedOn).fromNow()}</p>
                            <Link to={`/User/${question.userId}`} className='user-link' style={{color:"#0086d8",}}>
                              <Avatar backgroundColor="orange" px="7px" py="7px">{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                            <div>
                              {question.userPosted}
                            </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {
                    question.noOfAnswer !== 0 && (
                      <section>
                        <h3> {question.noOfAnswer} Answer</h3>
                        <DisplayAnswer key={question._id} question={question} handleShare={handleShare}/>
                      </section>
                    )
                  }
                  <section className='post-ans-container'>
                    <h3>Your Answer</h3>
                    <form onSubmit={(e) => { handlePostAns(e, question.answer.length)}}>
                      <textarea name="" id="" cols="30" rows="10" value={Answer} onChange={(e) => setAnswer(e.target.value)}></textarea><br />
                      <input type="submit" className='post-ans-btn' value='Post Your Answer' />
                    </form>
                    <p>
                      Browse other question tagged
                      {
                        question.questionTags.map((tag)=>(
                          <Link to='./Tags' key={tag} className='ans-tags'> {tag} </Link>
                        ))
                      } or  
                      <Link to='/AskQuestion ' style={{textDecoration:'none' , color:'#009dff'}}> ask your own question</Link>
                    </p>
                  </section>
                </div>
              )) 
            } 
          </>
        }
    </div>
  ) 
}

export default QuestionDetails