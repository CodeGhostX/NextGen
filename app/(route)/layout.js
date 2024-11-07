import Header from "./_components/Header";
import SideNav from "./_components/SideNav";

export const metadata = {
    title: "Main Page",
    description: "Next App",
};

const layout = ({children}) => {
  return (
    <div className="flex">
        <div className="sm:w-64">
            <SideNav/>
        </div>
        <div className="w-full">
            <Header/>
            {children}
        </div>
    </div>
  )
}

export default layout
