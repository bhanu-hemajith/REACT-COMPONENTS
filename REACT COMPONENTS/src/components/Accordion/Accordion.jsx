import { useState } from 'react'
import './Accordion.css'
import {FiChevronUp,FiChevronDown} from "react-icons/fi";

export const Accordion = () => {

  const [faq] = useState([
    {
        id: 1,
        question: "How does react work?",
        answer:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero sit labore ducimus perferendis error. Quam animi laborum quia laudantiumreprehenderit hic quasi, provident, ad soluta, corporis alias nihil odio dicta.'
      },
      {
        id: 2,
        question: "How does react work?",
        answer:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident est porro cumque maiores, minima cum impedit dolorem harum minus sequi quae officia error accusamus quidem earum aperiam accusantium deserunt amet.",
      },
      {
        id: 3,
        question: "How does react work?",
        answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa consectetur quam, excepturi id voluptate placeat architecto sit aliquam ea. Illo vel explicabo quisquam dolorum corrupti sapiente recusandae voluptatem dolore nobis!",
      },
      {
        id: 4,
        question: "How does react work?",
        answer:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur molestias, porro atque iure cupiditate, corporis nostrum sapiente maiores ab accusantium reprehenderit delectus eos excepturi dolore. Autem, blanditiis! Nemo, maiores ipsam.",
      },
      
  ])

  const [activeFaq, setActiveFaq] = useState('')
  
  const handleFaqEvent = (id)=>{
    setActiveFaq((prev) => prev == id ?'':id)
  }
  console.log(activeFaq);
  
  return (
    <>
        <div className='faq-container'>
          <div className='faq-content-container'>
            <div className='faq-img-container'>
                <img className='faq-img' src="https://www.cybertill.com/wp-content/uploads/2020/08/10-questions-charity.png" alt="" />
            </div>
            <div className='faq-heading'>
                FAQ
            </div>
            <div className='faq-content'>
                {
                    faq.map(({id,question,answer})=>(
                        <div className='accordion-container' key={id}>
                            <div onClick={()=> handleFaqEvent(id)} className='accordion-question-text'>
                                <p>{question}</p>
                                <span>
                                    {
                                        id === activeFaq ? < FiChevronUp /> : <FiChevronDown />
                                    }
                                </span>
                            </div>
                            {
                                id === activeFaq  && (
                                    <div className='accordion-answer-text' >
                                            <p>{answer}</p>
                                        </div>
                                )      
                            }
                        </div>
                    ))
                }
            </div>
          </div>


        </div>
        
    </>
  )
}