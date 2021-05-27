/**
 * @class
 * Add Products form Database using following constructor
 */
export default class Products{
    constructor(
        id,
        name="",
        url=[],
        price=0,
    ){
        this.id=id
        this.name=name
        this.url=url
        this.price=price
        return{
            id,
            name,
            url:url[0].image,
            price,
        }
    }

}