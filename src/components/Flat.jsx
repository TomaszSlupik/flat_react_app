import React from "react";
import "./Flat.css"
import Main from "./Main";
import Search from "../components/Search"

class Flat extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            flat : [
                  {
                     id: 0,
                       name_flat : 'Ochota',
                       area: '50m2',
                       price: '520 000 zł',
                       number: 3,
                       picture: '/img/one.jpg'
                     },
                
                     {
                       id: 1,
                      name_flat : 'Wilanów',
                       area: '30m2',
                      price: '459 000 zł',
                      number: 1,
                      picture: '/img/two.jpg'
                     },
                     {
                        id: 2,
                        name_flat : 'Mokotów',
                       area: '20m2',
                       price: '300 000 zł',
                       number: 1,
                       picture: '/img/three.jpg'

                     },

                     {
                        id: 3,
                        name_flat : 'Białołęka',
                       area: '70m2',
                       price: '450 000 zł',
                       number: 4,
                       picture: '/img/four.jpg'

                     }, 
                     {
                        id: 4,
                        name_flat : 'Targówek',
                       area: '60m2',
                       price: '448 000 zł',
                       number: 3,
                       picture: '/img/five.jpg'

                     },

                     {
                        id: 5,
                       name_flat : 'Bemowo',
                        area: '30m2',
                       price: '550 000 zł',
                       number: 1,
                       picture: '/img/six.jpg'
                      },
                      {
                         id: 6,
                         name_flat : 'Wola',
                        area: '50m2',
                        price: '600 000 zł',
                        number: 3,
                        picture: '/img/seven.jpg'
 
                      },
 
                      {
                         id: 7,
                         name_flat : 'Ursus',
                        area: '30m2',
                        price: '320 000 zł',
                        number: 1,
                        picture: '/img/eight.jpg'
 
                      }, 


                  ]
        }
        
    }

    

    searchHandler (term) {
      console.log(`Komponent wyższy`)
      const flatConst = [
        {
          id: 0,
            name_flat : 'Ochota',
            area: '50m2',
            price: '520 000 zł',
            number: 3,
            picture: '/img/one.jpg'
          },
     
          {
            id: 1,
           name_flat : 'Wilanów',
            area: '30m2',
           price: '459 000 zł',
           number: 1,
           picture: '/img/two.jpg'
          },
          {
             id: 2,
             name_flat : 'Mokotów',
            area: '20m2',
            price: '300 000 zł',
            number: 1,
            picture: '/img/three.jpg'

          },

          {
             id: 3,
             name_flat : 'Białołęka',
            area: '70m2',
            price: '450 000 zł',
            number: 4,
            picture: '/img/four.jpg'

          }, 
          {
             id: 4,
             name_flat : 'Targówek',
            area: '60m2',
            price: '448 000 zł',
            number: 3,
            picture: '/img/five.jpg'

          },

          {
             id: 5,
            name_flat : 'Bemowo',
             area: '30m2',
            price: '550 000 zł',
            number: 1,
            picture: '/img/six.jpg'
           },
           {
              id: 6,
              name_flat : 'Wola',
             area: '50m2',
             price: '600 000 zł',
             number: 3,
             picture: '/img/seven.jpg'

           },

           {
              id: 7,
              name_flat : 'Ursus',
             area: '30m2',
             price: '320 000 zł',
             number: 1,
             picture: '/img/eight.jpg'

           }, 

      ]
      const flat = flatConst.filter(el => el.name_flat.toLowerCase().includes(term.toLowerCase()))
      this.setState({flat})
    }

    render () {

        const flat = this.state.flat.map(el=> {
            return <Main 
                    key={el.id}
                    name_flat={el.name_flat}
                    area={el.area}
                    price={el.price}
                    number={el.number}
                    picture={el.picture}
                    
            />
        })


    return (
        <div>
          <Search onSearch={(term)=> this.searchHandler(term)}/>
            <div className="flatboxSearchwrapper">
            <div className="flexflatbox">
            <div className="flatboxSearch">
                    {flat}    
            </div>  
            </div>    
            </div> 
        </div>
    )
}
}

export default Flat
