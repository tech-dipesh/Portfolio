import React from 'react'
const fqaLists=[
  {question: "What's your name", answer: "My Legal Name is Dipendra Sharma but i prefer to use a Dipesh Sharma"},
  {question: "Have you done any internship?", answer: "As of now i've not done any internship which i'm currently looking for with remote roles as of now."},
]

export default function FaA() {
  return (
    <div>
      {fqaLists.map(f=>(
        <div>
          <div>Question: {f.question}</div>
          <div>answer: {f.answer}</div>
        </div>
      ))}
    </div>
  )
}
