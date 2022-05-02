import { useEffect, useState } from "react";
import { useUsername } from '../components/UserContext';
import rescueGroupAPI from '../api/rescueGroupAPI';


function Bookmark(){
  const [bookmarks, setBookmarks] = useState()

  const username = useUsername()

  const loadBookmarks = async () => {
    const bookmark_data = await rescueGroupAPI.fetchBookmarks(username)
    let temp_list = []
    if (bookmark_data){ 
      for (let i = 0; i < bookmark_data.length; i ++){
      const animal_data = await rescueGroupAPI.fetchDoggo(bookmark_data[i])
      temp_list.push(animal_data)
      }
    }
    if(temp_list !== []){
      setBookmarks(temp_list)
    }
  }

  useEffect(() => {
    loadBookmarks()
  }, [])

  return (
    <div>These are the bookmarks!</div>
  )
}

export default Bookmark