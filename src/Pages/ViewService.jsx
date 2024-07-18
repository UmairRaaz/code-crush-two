import { useParams } from "react-router-dom"


const ViewService = () => {
  const {serviceid} =  useParams()
  return (
    <div className="h-screen mt-44">{serviceid}</div>
  )
}

export default ViewService