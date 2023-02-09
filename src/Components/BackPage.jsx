
import ColumnPostBox from './ColumnPostBox';
import SideBar from './SideBar';
import StoryBox from './StoryBox';

export default function BackPage(){
    return(
        <div className="BackPage">
            <div className="ContentCenter">
                <StoryBox/>
                <ColumnPostBox/>
                <SideBar/>
            </div>
        </div>
    )
}