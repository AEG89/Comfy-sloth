import React from 'react'
import styled from 'styled-components'
import {BsStarFill,BsStarHalf,BsStar} from 'react-icons/bs'

const Stars = ({stars,reviews}) => {

  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5
    return (
      <span key={index}>
        {stars > number ? (
          <BsStarFill />
        ) : stars > index ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    )
  })




  return (
    <Wrapper>
      <div className='stars'>
        {tempStars}
        {/* <span>
          {stars >= 1 ? (<BsStarFill/>) : stars >= 0.5 ? (
            <BsStarHalf/>
          ):(<BsStar/>)}
        </span>
        <span>
          {stars-1 >= 1 ? (<BsStarFill/>) : stars >= 0.5 ? (
            <BsStarHalf/>
          ):(<BsStar/>)}
        </span>
        <span>
          {stars-2 >= 1 ? (<BsStarFill/>) : stars >= 0.5 ? (
            <BsStarHalf/>
          ):(<BsStar/>)}
        </span>
        <span>
          {stars-3 >= 1 ? (<BsStarFill/>) : stars >= 0.5 ? (
            <BsStarHalf/>
          ):(<BsStar/>)}
        </span>
        <span>
          {stars-4 >= 1 ? (<BsStarFill/>) : stars >= 0.5 ? (
            <BsStarHalf/>
          ):(<BsStar/>)}
        </span> */}
      </div>
      <p className='reviews'>{reviews} Customer Reviews</p>

    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`
export default Stars
