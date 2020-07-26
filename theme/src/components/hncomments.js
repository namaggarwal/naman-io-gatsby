import React, { useEffect, useState } from "react"
import styled from "@emotion/styled"

const CommentHead = styled.div`
  font-weight: bold;
`

const FirstComment = styled.div`
  text-align: center;
  margin-top: 1rem;
`

export default function HackerNews({ id }) {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        if (!data) return
        if (!Array.isArray(data.kids) || data.kids.length === 0) return
        fetchComments(data.kids)
      })
  }, [])

  const fetchComments = comments => {
    Promise.all(
      comments.map(comment =>
        fetch(`https://hacker-news.firebaseio.com/v0/item/${comment}.json`)
          .then(response => {
            if (response.ok) {
              return response.json()
            } else {
              return Promise.reject(new Error(response.statusText))
            }
          })
          .catch(error => console.log(error))
      )
    ).then(data => {
      const filteredData = data.filter(d => d !== undefined)
      setComments(filteredData)
      setLoading(false)
    })
  }

  if (loading) return ""

  const post = `https://news.ycombinator.com/item?id=${id}`
  return (
    <div>
      <CommentHead>
        Comments from Hacker News ({" "}
        <a rel="noopener noreferrer" href={post} target="_blank">
          add a comment
        </a>{" "}
        )
      </CommentHead>
      <div>
        {comments.length === 0 && (
          <FirstComment>Be the first one to comment</FirstComment>
        )}
        {comments.map(comment => (
          <Comment
            key={comment.id}
            link={`https://news.ycombinator.com/item?id=${comment.id}`}
            by={comment.by}
            text={comment.text}
          />
        ))}
      </div>
    </div>
  )
}

const CommentContainer = styled.div`
  padding: 1.4rem;
  margin-top: 0.8rem;
  background: #efefef;
`

const Comment = ({ by, text, link }) => (
  <CommentContainer>
    <a target="_blank" rel="noopener noreferrer" href={link}>
      {by}
    </a>
    <div dangerouslySetInnerHTML={{ __html: text }} />
  </CommentContainer>
)
