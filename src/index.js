const roastPorkUrl = "http://localhost:3000/dishes/1"
const dishName = document.querySelector(".dish-details h2")
const dishImg = document.querySelector(".dish-details img")
const dishDescription = document.querySelector(".description textarea")
const customerReview = document.querySelector("ul.reviews")




document.addEventListener("DOMContentLoaded", () => {

  fetch(roastPorkUrl)
  .then(res => res.json())
  .then(data => {
    dishName.innerHTML = data.name
    dishImg.src = data.image_url
    dishDescription.innerHTML = data.description
    const reviews = data.reviews
    reviews.forEach(review => {
      const dishReviews = document.createElement("li") 
      customerReview.append(dishReviews)
      dishReviews.innerHTML = reviews

    })
    
    })
      
    })
      

  
    

  


















    



    









    





















