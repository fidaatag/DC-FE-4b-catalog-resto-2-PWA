import TheRestoSource from '../../data/theresto-source';
import {createItemRestoTemplate} from '../template/template-creator';

const AllResto = {
  async render() {
    return `
            <div class="titlecard">
                <h3 tabindex="0">All The Restaurants In This City</h3>
                <span class="line"></span>
            </div>

            <div class="cardcontainer" id="restocard"></div>
        `;
  },

  async afterRender() {
    const resto = await TheRestoSource.allResto();
    console.log(resto);
    const restocard = document.querySelector('#restocard');
    resto.forEach( (res) => {
      restocard.innerHTML += createItemRestoTemplate(res);
    });
  },
};

export default AllResto;
