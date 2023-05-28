import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [{
id: 'm2',
title: 'Burj Khalifa',
description: 'One of the tallest building in the world',
imageUrl: 'https://images.pexels.com/photos/5087050/pexels-photo-5087050.jpeg?auto=compress&cs=tinysrgb&w=760&h=750&dpr=3',
address: '1 Sheikh Mohammed bin Rashid Blvd - Downtown Dubai - Dubai - United Arab Emirates',
location : {
  lat: '25.1972° N',
  lng: '55.2744° E'
},
creator: 'u2'
}, 
{
  id: 'm3',
  title: 'Banff',
  description: 'Beautiful place I have ever seen ❤️',
  imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipPzimxJsxAtGlcTnauzpuNQJd7pcPn5l3BsQ3w_=s680-w680-h510',
  address: 'Improvement District No. 9, AB T0L',
  location : {
    lat: '51.4968° N',
    lng: '115.9281° W'
  },
  creator: 'u3'
  }]
;

const UserPlace = function (props) {
  const userId = useParams().userId
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId)
  return <PlaceList items={loadedPlaces} />
}

export default UserPlace