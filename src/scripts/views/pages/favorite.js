import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import {createItemRestoTemplate} from '../template/template-creator';

const FavoriterResto = {
  async render() {
    return `
        <div class="titlecard">
            <h3 tabindex="0">Your fav Resto</h3>
            <span class="line"></span>
        </div>

        <div class="cardcontainer" id="restocard"></div>
        `;
  },

  async afterRender() {
    const resto = await FavoriteRestoIdb.getAllResto();
    const restocard = document.querySelector('#restocard');

    resto.forEach((res) => {
      restocard.innerHTML += createItemRestoTemplate(res);
    });
  },
};

export default FavoriterResto;
