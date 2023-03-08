import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData'
import { exercisesData, videos, target, equipment } from '../data'

const ExerciseDetail = () => {
  const { id } = useParams()

  const detail = exercisesData.find((item) => item.id === id)

  const [exerciseDetail, setExerciseDetail] = useState(detail)
  const [exerciseVideos, setExerciseVideos] = useState(videos)
  const [targetMuscleExercises, setTargetMuscleExercises] = useState(target)
  const [equipmentExercises, setEquipmtntExercises] = useState(equipment)

  // console.log('exerciseDetail =====>', exerciseDetail)
  // console.log('exerciseVideos =====>', exerciseVideos)
  // console.log('targetMuscleExercises =====>', targetMuscleExercises)
  // console.log('equipmentExercises=====>', equipmentExercises)

  // useEffect(() => {
  //   const fetcExercisesData = async () => {
  //
  //     const yoytubeSearchUrl =
  //       'https://youtube-search-and-download.p.rapidapi.com'

  //     const exerciseDetailData = await fetchData(
  //       `${process.env.REACT_APP_RAPID_URL}/exercise/${id}`,
  //       exerciseOptions
  //     )
  //     setExerciseDetail(exerciseDetailData)
  // const exerciseVideoData = await fetchData( `${youtubeSearchUrl}/search?q=${detail.name}`,
  // youtubeOptions)
  // setExerciseVideos(exerciseVideos)

  // const targetMuscleExercisesData = await fetchData(`${process.env.REACT_APP_RAPID_URL}}/exercises/target/${exerciseDetailData.target}`)
  //   }

  //   fetcExercisesData()
  // }, [id])

  // useEffect(() => {
  // const fetchExerciseVideoData = async () => {
  //   const youtubeSearchUrl =
  //     'https://youtube-search-and-download.p.rapidapi.com'

  //   const exerciseVideosData = await fetchData(
  //     `${youtubeSearchUrl}/search?query=${detail.name}`,
  //     youtubeOptions
  //   )
  //   setExerciseVideos(exerciseVideosData.contents)
  // }
  // fetchExerciseVideoData()

  // const fetchDataMore = async () => {
  //   const targetMuscleExercisesData = await fetchData(
  //     `${process.env.REACT_APP_RAPID_URL}/target/${exerciseDetail.target}`,
  //     exerciseOptions
  //   )

  //   setTargetMuscleExercises(targetMuscleExercisesData)

  //   const equipmentExercisesData = await fetchData(
  //     `${process.env.REACT_APP_RAPID_URL}/equipment/${exerciseDetail.equipment}`,
  //     exerciseOptions
  //   )

  //   setEquipmtntExercises(equipmentExercisesData)
  // }

  // fetchDataMore()
  // }, [id])

  return (
    <Box>
      <Detail detail={exerciseDetail} />
      <ExerciseVideos videos={exerciseVideos} name={detail.name} />
      <SimilarExercises
        target={targetMuscleExercises}
        equipment={targetMuscleExercises}
      />
    </Box>
  )
}

export default ExerciseDetail
