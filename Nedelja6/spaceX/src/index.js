import LaunchList from "./components/launch_list";
import Header from './components/header'
import Filter from './components/filter'

const app = document.querySelector("#app");

// const header=Header()


const launch_list = LaunchList();
const header = Header();
const filter=Filter();


const footer = document.createElement("footer");

app.append(header, filter, launch_list, footer);
