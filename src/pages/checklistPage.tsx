import { CheckList } from '../components/checklist/checkList';
import { HeaderMenu } from '../components/headerMenu/headerMenu';

export function ChecklistPage() {
    return (
        <div className="ChecklistPage">
            <HeaderMenu></HeaderMenu>
            <h2>Manage your checklist</h2>
            <CheckList></CheckList>
        </div>
    );
}
