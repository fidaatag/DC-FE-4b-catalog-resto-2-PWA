/* eslint-disable indent */
/* eslint-disable max-len */
import CONFIG from '../../globals/config';

const createItemRestoTemplate = (resto) => `
    <div class="card-item">

        <div class="card-img">
            <img src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" 
            alt="${resto.name} Restaurant's photo">
        </div>

        <div class="card-name">
            <h4><a href="/#/detail/${resto.id}">
            ${resto.name}
            </a>
            </h4>
        </div>

        <div class="card-desk">
            <p>${resto.description}</p>
        </div>

        <div class="card-info">
            <p>⌂ ${resto.city}</p>
            <p>☆ ${resto.rating}</p>
        </div>

        <div class="card-booking">
            <button>Booking</button>
        </div>

    </div>
`;

const createDetailRestoTemplate = (detail) => `
        <div class="titlecard">
            <h3>${detail.restaurant.name} <span class="rating">(☆ ${detail.restaurant.rating})</span></h3>
            <span class="line"></span>
        </div>

        <div class="detailcontainer">
            <img src="${CONFIG.BASE_IMAGE_URL + detail.restaurant.pictureId}" 
                 alt="${detail.restaurant.name}">
            <div class="detailinfo">
                <table class="info">
                    <tr>
                        <th>City</th>
                        <td>: ${detail.restaurant.city}</td>
                    </tr>
                    <tr>
                        <th>Addres</th>
                        <td>: ${detail.restaurant.address}</td>
                    </tr>
                </table>

                <div class="menuresto">
                    <h4 class="titlemenu"> ${detail.restaurant.name} Menu</h4>
                    <div class="menulist">
                        <div class="foodlist">
                            <h4>Foods</h4>
                            <ol>
                                ${detail.restaurant.menus.foods.map((food) => `<li>${food.name}</li>`)
                                    .join('')
                                }
                            </ol>
                        </div>
                        <div class="drinklist">
                            <h4>Drinks</h4>
                            <ol>
                                ${detail.restaurant.menus.drinks
                                    .map((drink) => `<li>${drink.name}</li>`)
                                    .join('')
                                }
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div class="desc">
                <h4>Descriptions</h4>
                <p>
                    ${detail.restaurant.description} 
                </p>
            </div>
        </div>

        <div class="favorite">
            
        </div>

        <div class="restocoment">
            <h4>Review Customer</h4>
            <div class="comentcontent">
                <div class="allcoment">
                    ${
                        detail.restaurant.customerReviews
                            .map((review) =>
                                `<div class="comentitem">
                                        <h5>${review.name} <span>(${review.date})</span></h5>
                                        <p>${review.review}</p>
                                </div>`)
                            .join('')
                    }                 
                </div>

                <div class="addcoment">
                    <h5>Add Your Comment</h5>
                    <form>
                        <input type="text" name="name" id="" placeholder="Your name">
                        <textarea name="comment" id="" placeholder="Write your comment here!"></textarea>
                        <button type="submit">add coment</button>
                    </form>
                </div>
                
            </div>
        </div>  
    
`;

const createAddFavoriteButtonTemplate = () => `
    <button class="favbutton"><span class="addfav">Add</span> Your Favorite Resto </button>
`;

const createRemoveFavoriteButtonTemplate = () => `
    <button class="favbutton"><span class="removefav">Remove</span> Your Favorite Resto </button>
`;

export {
    createItemRestoTemplate,
    createDetailRestoTemplate,
    createAddFavoriteButtonTemplate,
    createRemoveFavoriteButtonTemplate,
};
