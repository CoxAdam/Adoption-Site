import { Link } from 'react-router-dom';

function SideBar() {
  return (
    <div className="sidebar">
      <h4 className="title">Find an Animal</h4>
      <ul className="list">
        <Link to='/animals/Dog/25/0' className="row">Dogs</Link>
        <Link to='/animals/Cat/25/0' className="row">Cats</Link>
        <li className="row">Other Animals</li>
      </ul>
    </div>
  )
}

export default SideBar