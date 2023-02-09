import Direct from './Direct';
import InteractionBox from './InteractionBox';
import Logo from './Logo';
import Search from './Search';


export default function NavBar(){
    return (
        <div className="NavBar">
            <Logo/>
            <Search/>
            <InteractionBox/>
            <Direct/>
        </div>
    )
}