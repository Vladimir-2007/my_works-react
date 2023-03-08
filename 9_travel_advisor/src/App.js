import React, { useState, useEffect } from 'react'
import { CssBaseline, Grid } from '@material-ui/core'
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'
import { places } from './places/places'


const App = () => {

  const [ childClicked, setChildClicked ] = useState( null )
  const [ coordinates, setCoordinates ] = useState( {} )
  const [ bounds, setBounds ] = useState( {} )

  const [ isLoading, setIsLoading ] = useState( false )
  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState('')

  // console.log(places)
  // console.log( 'SW====> ',  bounds.ne )
  // console.log( 'Coordinates====> ', coordinates )

  useEffect( () => {
    setIsLoading( true )
    navigator.geolocation.getCurrentPosition(
      ( { coords: { latitude, longitude } } ) => {
        setCoordinates( { lat: latitude, lng: longitude } )
      }
    )
    setIsLoading( false )
  }, [places] )


  return (
    <>
      <CssBaseline/>
      <Header/>
      <Grid container spacing={ 3 } style={ { width: '100%' } }>

        <Grid item xs={ 12 } md={ 4 }>
          <List
            places={ places }
            childClicked={ childClicked }
            isLoading={ isLoading }
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />

        </Grid>

        <Grid item xs={ 12 } md={ 8 }>
          <Map
            setCoordinates={ setCoordinates }
            setBounds={ setBounds }
            coordinates={ coordinates }
            places={ places }
            setChildClicked={ setChildClicked }
          />
        </Grid>
      </Grid>
    </>
  )
}

export default App

// import React, { useState, useEffect } from 'react'
// import { CssBaseline, Grid } from '@material-ui/core'
// import { uid } from 'uid/single'
//
// import Header from './components/Header/Header'
// import List from './components/List/List'
// import Map from './components/Map/Map'
//
// const places = [
//   {
//     id: uid,
//     name: 'Pivovar',
//     price_level: 3,
//     place_ranking: 4,
//     address: 'Yaroslavl',
//     phone: '+7 910 88 99',
//     rating: 4,
//     website: '',
//     photo: 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg',
//     awards: [ 'goldMedal', 'triumph', 'institution' ],
//     cuisine: [ 'pizza', 'cocktail', 'fish', 'spaghetti' ],
//     latitude: '',
//     longitude: ''
//   },
// ]
//
// const App = () => {
//   const [ coordinates, setCoordinates ] = useState( {} )
//   const [ bounds, setBounds ] = useState( {} )
//
//   console.log(places)
//   console.log( 'SW====> ',  bounds.ne )
//   console.log('Coordinates====> ', coordinates)
//
//   useEffect( () => {
//     navigator.geolocation.getCurrentPosition(
//       ( { coords: { latitude, longitude } } ) => {
//         setCoordinates( { lat: latitude, lng: longitude } )
//       }
//     )
//   }, [] )
//
//   useEffect( () => {
//     // console.log( 'Coord ======>', coordinates, 'Bounds========>', bounds )
//     if ( bounds ) {
//       getPlacesData( bounds.sw, bounds.ne )
//       .then( data => {
//         setPlaces( data )
//       } )
//     }
//   }, [ coordinates, bounds ] )
//
//   return (
//     <>
//       <CssBaseline/>
//       <Header/>
//       <Grid container spacing={ 3 } style={ { width: '100%' } }>
//         <Grid item xs={ 12 } md={ 4 }>
//           <List places={ places }/>
//         </Grid>
//
//         <Grid item xs={ 12 } md={ 8 }>
//           <Map
//             setCoordinates={ setCoordinates }
//             setBounds={ setBounds }
//             coordinates={ coordinates }
//             places={ places }
//           />
//         </Grid>
//       </Grid>
//     </>
//   )
// }
//
// export default App
