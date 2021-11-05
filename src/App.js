import React from 'react'
import TopWrapper from './Components/TopWrapper';
import Products from './Components/Products';
import Block from './Components/Block';
import BottomWrapper from './Components/TopWrappComponents/BottomWrapper';
import Review from './Components/Review';
import Input from './Components/UI/Input';
import Button from './Components/UI/Button';




function App () {

  let [reviews, setReviews] = React.useState([
    {id: 1, name: "Антон", reviewWord: "Отличный магазин, хорошие вещи по приятной цене!"},
    {id: 2, name: "Даниил", reviewWord: "Купил штаны, остался доволен покупкой, качество лучше, чем у ZNWR"}
  ])
  let [name, setName] = React.useState("")
  let [reviewWord, setReviewWord] = React.useState("")

  function addReview () {
    const newPost = {
      name,
      reviewWord,
      id: Date.now()
    }
    console.log(newPost)
    setReviews([...reviews, newPost])
  }



  return (
  <div className="wrapper">
    <TopWrapper />
    <Products title="Наши продукты:" />
    <div className="middle-part">
      <Block name="ANTHONY UNKNOWN DEATH ZIP HOODIE" price="50$" src={<img src="https://thumbor9.kiiiosk.store/unsafe/458x/https://aws.kiiiosk.store/uploads/shop/2237/uploads/product_image/image/707390/SITE.jpg" alt="Image" width="500px" height="500px" />} />
      <Block name="ANTHONY UNKNOWN MIRACLES ZIP HOODIE" price="92$" src={<img src="https://thumbor9.kiiiosk.store/unsafe/458x/https://aws.kiiiosk.store/uploads/shop/2237/uploads/product_image/image/707895/sand.jpg" alt="Image" width="500px" height="500px" />} />
      <Block name="ANTHONY UNKNOWN MONOGRAM SCARF in BLACK&WHITE" price="20$" src={<img src="https://thumbor9.kiiiosk.store/unsafe/458x/https://aws.kiiiosk.store/uploads/shop/2237/uploads/product_image/image/709027/site1.jpg" alt="Image" width="500px" height="500px" />} />
      <Block name="ANTHONY UNKNOWN GHOST HAT" price="30$" src={<img src="https://thumbor9.kiiiosk.store/unsafe/458x/https://aws.kiiiosk.store/uploads/shop/2237/uploads/product_image/image/711812/SITE___________.jpg" alt="Image" width="500px" height="500px" />} />
    </div>
    <BottomWrapper />
    <p className="reviwes-name"><strong>Отзывы:</strong></p>
    {reviews.map(review => {
      return <Review review={review} key={review.id} />
    })}
    <div>
    <div className="inputs">
      <Input onChange={(e) => setName(e.target.value)} type="text" placeholder="Имя" value={name} />
      <Input onChange={(e) => setReviewWord(e.target.value)} type="text" placeholder="Ваш отзыв" value={reviewWord} />
    </div>
    </div>
    <Button onClick={addReview} />
  </div>
  )}

export default App;
