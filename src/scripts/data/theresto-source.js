import API_ENDPOINT from '../globals/api-endpoint';
// import CONFIG from '../globals/config';

class TheRestoSource {

  // fetch to get all resto
  static async allResto() {
    const response = await fetch(API_ENDPOINT.ALL_RESTO);
    const responJson = await response.json();
    return responJson.restaurants;
  }

  // fetch to get detail resto
  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  // fetch to post review resto
  static async addReview(data) {
    const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'X-Auth-Token': CONFIG.KEY,
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
}

export default TheRestoSource;
