import React from 'react'; 
import {Route, Switch} from 'react-router-dom'
import {Registr} from './pages/Registration'
import{Avtoris} from './pages/Avtorisation'
import{ForgotPass} from './pages/ForgotPass'
import {Dashboard} from './pages/Dashboard'
import { MyDiplom } from './pages/MyDiplom';
import { InstructStud } from './pages/Instruction';
import { Documents } from './pages/Documents';
import { FAQ } from './pages/FAQ';
import { News } from './pages/News';
import { SettingStud } from './pages/SettingProfStud';
import {DashboardDR} from './pages/DashboardDR'
import { Students } from './pages/Students';
import {Student} from './pages/StudPage'
import {FAQDR} from './pages/FAQ_DR'
import { NewsDR } from './pages/News_DR';
import { SettingDR } from './pages/SettingDR';
import { DocumentsDR } from './pages/DocumentDR';
import { DashboardPU } from './pages/DashboardPU';
import { GroupStud } from './pages/GroupStud';
import { Stud } from './pages/Student';
import { Dipruc } from './pages/Dipruc';
import { Dip } from './pages/Dip';
import { Users } from './pages/Users';
import { NewsPU } from './pages/NewsPU';
import { SettingPU } from './pages/SettingPU';
import { InstructPU } from './pages/InstructionPU';
import { InstructDR } from './pages/InstructionDR';
import { DocumentsPU } from './pages/DocumentPU';
import { FAQPU } from './pages/FAQPU';
import { Zakaz } from './pages/Zakaz';

export const useRoutes = () => {

    return(
        <Switch>
            <Route path={'/'} exact>
                <Registr/>
            </Route>
            <Route path={'/pages/Avtorisation'} exact>
                <Avtoris/>
            </Route>
            <Route path={'/pages/ForgotPass'} exact>
                <ForgotPass/>
            </Route>
            <Route path={'/pages/Dashboard'} exact>
                <Dashboard/>
            </Route>
            <Route path={'/pages/MyDiplom'} exact>
                <MyDiplom/>
            </Route>
            <Route path={'/pages/InstructStud'} exact>
                <InstructStud/>
            </Route>
            <Route path={'/pages/Documents'} exact>
                <Documents/>
            </Route>
            <Route path={'/pages/FAQ'} exact>
                <FAQ/>
            </Route>
            <Route path={'/pages/News'} exact>
                <News/>
            </Route>
            <Route path={'/pages/SettingStud'} exact>
                <SettingStud/>
            </Route>

            {/* ЛК дип.рука */}

            <Route path={'/pages/DashboardDR'} exact>
                <DashboardDR/>
            </Route>
            <Route path={'/pages/Students'} exact>
                <Students/>
            </Route>
            <Route path={'/pages/Student'} exact>
                <Student/>
            </Route>
            <Route path={'/pages/InstructDR'} exact>
                <InstructDR/>
            </Route>
            <Route path={'/pages/DocumentsDR'} exact>
                <DocumentsDR/>
            </Route>
            <Route path={'/pages/FAQ_DR'} exact>
                <FAQDR/>
            </Route>
            <Route path={'/pages/News_DR'} exact>
                <NewsDR/>
            </Route>
            <Route path={'/pages/SettingDR'} exact>
                <SettingDR/>
            </Route>


            {/* ЛК дип.рука */}

            <Route path={'/pages/DashboardPU'} exact>
                <DashboardPU/>
            </Route>
            <Route path={'/pages/GroupStud'} exact>
                <GroupStud/>
            </Route>
            <Route path={'/pages/StudentUP'} exact>
                <Stud/>
            </Route>
            <Route path={'/pages/Dip_ruc'} exact>
                <Dipruc/>
            </Route>
            <Route path={'/pages/Dipruc'} exact>
                <Dip/>
            </Route>
            <Route path={'/pages/Users'} exact>
                <Users/>
            </Route>
            <Route path={'/pages/NewsPU'} exact>
                <NewsPU/>
            </Route>
            <Route path={'/pages/SettingPU'} exact>
                <SettingPU/>
            </Route>
            <Route path={'/pages/InstructionPU'} exact>
                <InstructPU/>
            </Route>
            <Route path={'/pages/DocumentsPU'} exact>
                <DocumentsPU/>
            </Route>
            <Route path={'/pages/FAQ_PU'} exact>
                <FAQPU/>
            </Route>
            <Route path={'/pages/Zayavki'} exact>
                <Zakaz/>
            </Route>
        </Switch>

    )
}