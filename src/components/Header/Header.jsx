import { Logo } from "components/logo"
import s from "./style.module.css"
import logo from "assets/images/logo.png"
export function Header (props){

    return <div className={`row ${s.container}`}>

        <div className="col-xs-12 col-sm-4">
            <Logo title="Notomatic" subtitle="Manage your notes" image={logo}/>
        </div>
        <div className="col-xs-12 col-sm-8 text-end">
            Button 
        </div>

    </div>
}