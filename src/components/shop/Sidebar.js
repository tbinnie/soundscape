import {useState, React} from "react";

const Sidebar = () => {

  const [filter, setFilter] = useState('All Brands')
  
  return (
    <section className="p-4 flex lg:justify-end items-start lg:w-[15%] shadow-lg lg:right-shadow">
      <div className="sidebar_wrapper rounded-xl text-white p-4 flex flex-col gap-12 lg:text-right">
        <div>
            <h3 className="text-2xl  text-emerald-300">Shop/</h3>
            <h2 className="text-4xl">{filter}</h2>
        </div>
        <div className="flex lg:flex-col gap-4">
            <h2 className="text-4xl hover:cursor-pointer hover:text-emerald-400 hover:scale-110" onClick={() => {setFilter('Zoom')}}>Zoom</h2>
            <h2 className="text-4xl hover:cursor-pointer hover:text-emerald-400 hover:scale-110" onClick={() => {setFilter('Sony')}}>Sony</h2>
            <h2 className="text-4xl hover:cursor-pointer hover:text-emerald-400 hover:scale-110" onClick={() => {setFilter('Tascam')}}>Tascam</h2>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
