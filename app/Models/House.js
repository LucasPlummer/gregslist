export class House {

    constructor(data) {
        this.id = generateId()
        this.year = data.year
        this.name = data.name
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.sqft = data.sqft
        this.price = data.price
        this.description = data.description
        this.imgUrl = data.imgUrl
    }

    get CardTemplate() {
        return `<div class="row" id="listings">
        <div class="col-4 p-4">
          <div class="card">
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/125626407/original/bdaf96cd092ab21a4820c2dfe7207921fb8277bf/build-a-dumb-minecraft-dirt-house.jpg"
              alt="dirt house" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title d-flex justify-content-between mb-2">
                <span>goofy ahh house</span>
                <span>$20000</span>
              </h5>
              <button class="btn btn-primary">
                See Details
              </button>
            </div>
          </div>
        </div>
      </div>`
    }
}