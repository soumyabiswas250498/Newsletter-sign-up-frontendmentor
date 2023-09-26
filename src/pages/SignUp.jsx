import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState('');
  const [validation, setValidation] = useState();
  let navigate = useNavigate();
  const handleEmailValidation = () => {
    const mailFormat = /\S+@\S+\.\S+/;
    const result = email.match(mailFormat);
    if (result === null) {
      setValidation(false);
    } else {
      setValidation(true);
      console.log('test');
      const data = { email: email };
      return navigate('/success', { state: data });
    }
  };

  return (
    <>
      <div className="flex h-screen sm:bg-[#36384D] sm:justify-center sm:items-center font-body">
        <div className="bg-white sm:w-8/12 sm:h-7/12 sm:rounded-3xl grid sm:grid-cols-12 overflow-hidden  sm:items-center">
          <div className="sm:hidden h-fit">
            <img
              src="/assets/images/illustration-sign-up-mobile.svg"
              className="w-full"
            />
          </div>
          <div className="mx-6 -mt-12 sm:mx-0 sm:my-4 sm:col-span-7 sm:pl-20 sm:pr-14">
            <h1 className="text-5xl sm:text-6xl pb-4 font-bold">
              Stay updated!
            </h1>
            <p className="text-lg py-2">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul className="list-none list-inside pt-1 pb-4">
              <li className="my-2 flex items-center text-lg">
                <img
                  src="/assets/images/icon-success.svg"
                  className="w-5 mr-3 pb-5 sm:pb-0"
                />
                Product discovery and building what matters
              </li>
              <li className="my-2 flex items-center text-lg">
                <img
                  src="/assets/images/icon-success.svg"
                  className="w-5 mr-3 pb-5 sm:pb-0"
                />
                Measuring to ensure updates are a success
              </li>
              <li className="my-2 flex items-center text-lg">
                <img
                  src="/assets/images/icon-success.svg"
                  className="w-5 mr-3 "
                />
                and much more!
              </li>
            </ul>
            <label className="block">
              <div className="flex justify-between">
                <span className="block text-sm font-bold text-slate-700 pb-2">
                  Email address
                </span>
                {validation === false ? (
                  <span className="block text-sm font-bold text-red-500 pb-2 mr-2">
                    Valid email required
                  </span>
                ) : (
                  ''
                )}
              </div>

              <input
                type="email"
                value={email}
                placeholder="email@company.com"
                className={
                  validation === false
                    ? 'bg-red-200 text-red-500 border-red-500 border-2 rounded-md w-full h-14 pl-7'
                    : 'border-gray-400 border-2 rounded-md w-full h-14 pl-7'
                }
                onChange={e => {
                  setEmail(e.target.value);
                }}
              />
            </label>
            <button
              className="bg-[#232742] hover:bg-gradient-to-r hover:from-[#ff5379] hover:to-[#ff6a3d] w-full text-white mt-8 h-14 rounded-md"
              onClick={() => handleEmailValidation()}
            >
              Subscribe to monthly newsletter
            </button>
          </div>
          <div className="hidden sm:block col-span-5 p-6 ">
            <img
              src="assets/images/illustration-sign-up-desktop.svg"
              className="object-fill h-full w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
