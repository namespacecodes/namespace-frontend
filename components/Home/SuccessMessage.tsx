import { poppins_200, poppins_500 } from "@/fonts/poppins"


const SuccessMessage = () => {
  return (
    <div className="bg-[#F8ECD0] flex flex-col flex-1 justify-center items-center mx-[30vw] p-[8vh] space-y-[3vh] rounded-[2vw] ">
            <div className={`${poppins_500.className} text-[#F6014E] text-2xl`}>
                Successful!
            </div>
            <div className={`${poppins_200.className} text-[#340181] text-lg`}>
               Thank you for signing up for our joinlist!
            </div>
    </div>
  )
}

export default SuccessMessage