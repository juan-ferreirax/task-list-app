import { Routes } from '@angular/router';
import { TaskList } from './components/task-list/task-list';

export const routes: Routes = [
    {
        path: "",
        component: TaskList
    },
    {
        path: "pendentes",
        component: TaskList
    },
    {
        path: "em-andamento",
        component: TaskList
    },
    {
        path: "concluidas",
        component: TaskList
    },
    {
        path: "**",
        redirectTo: ""
    }
];
