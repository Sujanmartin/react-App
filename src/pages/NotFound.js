import { useNavigate } from "react-router"

const NotFound = () => {
  const nav = useNavigate();
  return (
    <div className='h-[200px] w-[200px] mx-auto'>
      <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_ghfpce1h.json" background="transparent" speed="1" loop autoplay></lottie-player>
      <div className="text-center space-y-2">
        <h1 className="text-amber-800">Page Not Found</h1>
        <button
          onClick={() => nav('/')} className="text-red-800">Click To Go Home Page
        </button>

      </div>

    </div>
  )
}
export default NotFound

