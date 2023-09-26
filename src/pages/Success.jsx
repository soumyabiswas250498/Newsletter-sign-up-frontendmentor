import { useLocation } from 'react-router-dom';
function Success() {
  // let navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  if (data === null) {
    console.log('hello');
  }
  // console.log(data);
  return (
    <>
      <div className="flex h-screen sm:bg-[#242742] sm:justify-center sm:items-center font-body">
        <div className="bg-white sm:w-4/12 sm:h-7/12 sm:rounded-3xl p-10 sm:p-14 overflow-hidden flex flex-col sm:justify-center justify-between">
          <div className="pt-40 sm:pt-0">
            <div>
              <img src="/public/assets/images/icon-success.svg" />
            </div>
            <h1 className="text-5xl sm:text-6xl py-6 font-bold">
              Thanks for subscribing!
            </h1>
            <p>
              A confirmation email has been sent to{' '}
              <span className="font-bold">{`${data.email}`}</span>. Please open
              it and click the button inside to confirm you subscription.
            </p>
          </div>

          <button className="bg-[#232742] hover:bg-gradient-to-r hover:from-[#ff5379] hover:to-[#ff6a3d]   hover:drop-shadow-2xl w-full text-white sm:mt-8 h-14 rounded-md">
            Dismiss message
          </button>
        </div>
      </div>
    </>
  );
}

export default Success;
