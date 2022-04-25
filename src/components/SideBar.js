import { Link } from 'react-router-dom';

function SideBar() {
  return (
    <div className="sidebar">
      <h4 className="title">Find an Animal</h4>
      <ul className="list">
        <Link to='/animals/dog' className="row">Dogs</Link>
        <Link to='/animals/cat' className="row">Cats</Link>
        <li className="row">Other Animals</li>
      </ul>
    </div>
  )
}

export default SideBar