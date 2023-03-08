import React, { useState, useEffect, createRef } from 'react'
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select
} from '@material-ui/core'
import PlaceDetails from '../PlaceDetails/PlaceDetails'
import useStyles from './styles'


const List = ({ places, childClicked, isLoading, type, setType, rating, setRating }) => {

  const classes = useStyles()
  const [elRefs, setElRefs] = useState([])



  // console.log('Elrefs=====> ', elRefs)

  useEffect(() => {
    setElRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()))
  }, [places])

  return (
    <div className={ classes.container }>
      <Typography variant="h5">
        Рестораны, Гостиницы & Достопримечательности вокруг вас !!!
      </Typography>
      { isLoading ? (
        <div className={ classes.loading }><CircularProgress size="5rem"/></div>
      ) : (
        <>
          <FormControl className={ classes.formControl }>
            <InputLabel>Type</InputLabel>
            <Select value={ type } onChange={ (e) => setType(e.target.value) }>

              <MenuItem value="restaurants">
                Рестораны
              </MenuItem>

              <MenuItem value="hotels">
                Гостиницы
              </MenuItem>

              <MenuItem value="attractions">
                Достопримечательности
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl className={ classes.formControl }>
            <InputLabel>Рейтинг</InputLabel>
            <Select value={ rating } onChange={ (e) => setRating(e.target.value) }>
              <MenuItem value={ 0 }>Все</MenuItem>
              <MenuItem value={ 3 }>Выше 3.0</MenuItem>
              <MenuItem value={ 4 }>Выше 4.0</MenuItem>
              <MenuItem value={ 4.5 }>Выше 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={ 3 } className={ classes.list }>
            { places?.map((place, i) => (
              <Grid ref={ elRefs[i] } item key={ i } xs={ 12 }>
                <PlaceDetails
                  selected={ Number(childClicked) === i }
                  refProp={ elRefs[i] }
                  place={ place }
                />
              </Grid>
            )) }
          </Grid>
        </>
      )
      }
    </div>
  )
}

export default List
