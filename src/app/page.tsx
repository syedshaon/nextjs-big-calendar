 
import NewCalendar from "../components/NewCalendar";
export default function Home() {
  return (
    <div className="p-5 bg-gray-300 h-screen overflow-y-scroll" >
     
        {/* <CustomizedCalendar /> */}
        <NewCalendar />
      <div className="h-[500px]"></div>
    </div>
  );
}
