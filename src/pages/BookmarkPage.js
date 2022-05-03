import { useEffect, useState } from "react";
import { useUsername } from '../components/UserContext';
import rescueGroupAPI from '../api/rescueGroupAPI';
import { Link } from 'react-router-dom';


function Bookmark(){
  const [bookmarks, setBookmarks] = useState()

  const username = useUsername()

  const loadBookmarks = async () => {
    const bookmark_data = await rescueGroupAPI.fetchBookmarks(username)
    let temp_list = []
    if (bookmark_data){ 
      let bookmark_list = bookmark_data
      if (bookmark_data.length > 1){
        bookmark_list = bookmark_data.split(",")
        for (let i = 0; i < bookmark_list.length; i++){
          const animal_data = await rescueGroupAPI.fetchDoggo(bookmark_list[i])
          temp_list.push(animal_data)
        }
      }
      else {
        const animal_data = await rescueGroupAPI.fetchDoggo(bookmark_list[0])
        temp_list.push(animal_data)
      }
      console.log("BOOKMARK_LIST:", bookmark_list)
      
    }
    if(temp_list !== []){
      setBookmarks(temp_list)
    }
  }
  console.log("BOOKMARKS:", bookmarks)

  const pic_list = []
  if (bookmarks){
    for (let i = 0; i < bookmarks.length; i++){
      for (let x = 0; x < bookmarks[i].included.length; x++){
        if (bookmarks[i].included[x].type === 'pictures'){
          pic_list.push(bookmarks[i].included[x].attributes.original.url)
          break
        }
      }
    }
  }

  console.log("PIC LIST:", pic_list)

  useEffect(() => {
    loadBookmarks()
  }, [])

  return (
    <div>
      {bookmarks ? bookmarks.map((bookmark, index) => {
        const doggo_data = bookmark.data[0].attributes
        return (
          <div key={index}>
            <div className="bookmark">
              <img className="pic" src={pic_list[index]}/>
              <div className="divider"></div>
              <h1><Link to={`/doggo/${bookmark.data[0].id}`}>{doggo_data.name}</Link></h1> 
              <h4>{doggo_data.breedPrimary ? doggo_data.breedPrimary : ""}{doggo_data.breedSecondary ? ` / ${doggo_data.breedSecondary}` : ""}</h4>
              <h6>{doggo_data.ageGroup ? `${doggo_data.ageGroup}` : ""} {doggo_data.ageString ? `: ${doggo_data.ageString}` : ""}{doggo_data.sex ? ` / ${doggo_data.sex}` : ""} {doggo_data.sizeGroup ? ` / ${doggo_data.sizeGroup}` : ""} {doggo_data.sizePotential ? ` / ${doggo_data.sizePotential}: ${doggo_data.sizeUOM}` : ""}</h6>
            </div>
          </div>
        )
      }) : <div>Page Loading...</div>}
    </div>
  )
}

export default Bookmark