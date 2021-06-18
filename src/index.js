document.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault()
  const roastPorkUrl = "http://localhost:3000/dishes/1"
  const dishName = document.querySelector(".dish-details h2")
  const dishImg = document.querySelector(".dish-details img")
  const dishDescription = document.querySelector(".description textarea")
  const customerReview = document.querySelector("ul.reviews")
  
  
  fetch(roastPorkUrl)
  .then(res => res.json())
  .then(data => {
    dishName.innerHTML = data.name
    dishImg.src = data.image_url
    dishDescription.innerHTML = data.description 
    customerReview.innerHTML = ""
    data.reviews.forEach(review => {
      const dishListItem = document.createElement("li")    
      dishListItem.innerHTML = review
      customerReview.append(dishListItem)
      })
   })

   const updateDishButton = document.querySelector('button')
   updateDishButton.addEventListener("click", (event) => {
     event.preventDefault()
     const newDescription = dishDescription.value
     
     const configurationObject = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
          description : newDescription
      })
    }
    fetch("http://localhost:3000/dishes/1", configurationObject)
    .then(res => res.json())
    .then(dish => {
      dishDescription.value
      })
  })
     
  const leaveReviewButton = document.querySelector('input')
  leaveReviewButton.addEventListener("click", (event) => {
    event.preventDefault()
    const newReviewItem = document.createElement('li')
    const reviewInput = document.querySelector(".review-form textarea")
    
    newReviewItem.innerHTML = reviewInput.value
    customerReview.append(newReviewItem)
    

    

  })




})





      

  
    

  


















    



    









    





















